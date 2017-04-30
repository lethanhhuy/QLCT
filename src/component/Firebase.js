/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import firebase from 'firebase';
import React, { Component } from 'react';
import Login from 'QLCT/src/component/Login.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Button,
} from 'react-native';


var provider = new firebase.auth.GoogleAuthProvider();


var config = {
      apiKey: "AIzaSyASaDPC-CdzmPtvnMmaVwmsPsj-_eKgI5c",
      authDomain: "qlct-867ff.firebaseapp.com",
      databaseURL: "https://qlct-867ff.firebaseio.com",
      projectId: "qlct-867ff",
      storageBucket: "qlct-867ff.appspot.com",
      messagingSenderId: "203112026007"
  }
  firebase.initializeApp(config);




export default class Firebase extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    };
    database= firebase.database();
    user=database.ref('User');
  }

  submit(){
      user.push({
        Username:this.state.username,
        Password:this.state.password,

      },()=> alert("!!!"))

  }


  ClickMe(){
    alert('Button has been pressed!');
  }

  render() {
    return (
      <View style={{flex:1}}>
          <TextInput placeholder={"user name"} onChangeText={(value) =>this.setState({username:value})}/>
          <TextInput placeholder={"password"} secureTextEntry={true}
                      onChangeText={(value) =>this.setState({password:value})}/>
          <Text onPress={this.submit.bind(this)}>
                Submit
          </Text>

      </View>
    );
  }
}
