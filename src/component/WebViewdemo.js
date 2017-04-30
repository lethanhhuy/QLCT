import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(

        <WebView
          source={{uri: 'https://console.firebase.google.com/'}}
          style={{marginTop: 20}}
        />

    );
  }
}
