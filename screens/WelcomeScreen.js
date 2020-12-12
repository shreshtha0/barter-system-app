import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      isModalVisible:false,
      firstName:'',
      lastName:'',
      contact:'',
      address:'',
      confirmPassword:'',
    }
  }

  userLogin = (emailId, password,confirmPassword)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }

  userSignUp = (emailId, password,confirmPassword) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    });
  }

  showModal =()=>{
    return(
    <Modal animationType='fade'transparent={true} visible={this.state.isModalVisible}>
      <View style={styles.modalContainer}>
        <ScrollView style={{width:'100%'}}>
         <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
          <Text style={styles.ModalTitle}> REGISTRATION</Text>
          <TextInput style={styles.formTextInput} 
          placeholder="FIRST NAME"
          onChangeText={(text)=>{
            this.setState({
              firstName:text
            })
          }} maxLength={8}></TextInput>

          <TextInput style={styles.formTextInput} 
          placeholder="LAST NAME"
          onChangeText={(text)=>{
            this.setState({
              lastName:text
            })
          }} maxLength={8}></TextInput>

<TextInput style={styles.formTextInput} 
          placeholder="CONTACT"
          keyboardType ='numeric'
          onChangeText={(text)=>{
            this.setState({
            contact:text
            })
          }} maxLength={10}></TextInput>

       <TextInput style={styles.formTextInput} 
          placeholder="ADDRESS"
          onChangeText={(text)=>{
            this.setState({
              address:text
            })
          }} multiline={true}></TextInput>

<TextInput style={styles.formTextInput} 
          placeholder="EMAIL ADDRESS"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId:text
            })
          }} ></TextInput>

<TextInput style={styles.formTextInput} 
          placeholder="PASSWORD"
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password:text
            })
          }} ></TextInput>

<TextInput style={styles.formTextInput} 
          placeholder="CONFIRM PASSWORD"
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
           confirmPassword:text
            })
          }} ></TextInput>
<View style={styles.modalBackButton}>
<TouchableOpacity style={styles.registerButton}
onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
  <Text style={{color:"brown"}}>REGISTER</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.registerButton}
onPress={()=>{this.setState.isModalVisible(false)(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
  <Text style={{color:"brown"}}>CANCEL</Text>
</TouchableOpacity>
</View>





         </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Modal>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          
          <Text style={styles.title}>BARTER SYSTEM</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@bartersystem.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
