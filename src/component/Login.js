import React, { Component } from 'react';
import firebase from 'firebase';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Button
} from 'react-native';

import Data from './Data.js';
var provider = new firebase.auth.GoogleAuthProvider();



export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      ghi:'',
      myfb:'',
    };

  }



  save = async()=>{
    try{
      await AsyncStorage.setItem(this.state.myfb, JSON.stringify(config));
      console.log("SAVE OK!!!!!");
    }catch(e){
      console.log(e)
    }
  }

  get = async()=>{
    try{
      var v = await AsyncStorage.getItem(this.state.myfb);

      console.log(JSON.parse(v));


    }catch(e){
      console.log(e)
    }
  }




  /*save(Variable,value){
    AsyncStorage.setItem(Variable,value);
  }
  read(Variable){
    AsyncStorage.getItem(Variable).then((value)=>{
      this.setState({doc:value});
    }).done();
  }*/



  render(){
    console.log(AsyncStorage)
    return(
      <View style={{flex:1}}>
        <View style={styles._f0}>
          <View style={styles._f1}>
            <Text style={styles.ai}>
              Đăng Nhập
            </Text>
          </View>
        </View>
        <TextInput style={{backgroundColor:'#f8fdff'}} placeholder={"Nhập lưu trữ"} onChangeText={(ghi) => this.setState({ghi})}
          value={this.state.ghi}>

          </TextInput>
        <View style={styles.wrapper}>
            <TouchableOpacity style={{alignItems:"center", justifyContent:"center"}}
              onPress={()=>{this.props.go()}}>
              <Text style={{color:'#439889',fontWeight:'bold',fontSize:18}}>
                Đăng Nhập
              </Text>
              <Image
               source={require('QLCT/images/1492425429_google_firebase.png')}/>
            </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={()=>{this.save()}}>
                <Text style={styles.text}>
                  Lưu
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={()=>{this.get()}}>
                <Text style={styles.text}>
                  Đọc
                </Text>
              </TouchableOpacity>

          </View>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  ai:{fontSize: 20,color: 'white',paddingLeft:25,paddingTop:4,fontWeight:'bold'},
  wrapper:{flex:1, backgroundColor:"#f8fdff", alignItems:"center", justifyContent:"center"},
  text:{color:"#4db6ac"},
  button:{borderWidth:1, borderColor:"#4db6ac", width:100, height: 75, padding:10, marginBottom:20, alignItems:"center", justifyContent:"center"},
  actionButtonIcon: {fontSize: 20, height: 22,color: 'white'},
  _f0:{backgroundColor: '#f8fdff' },
  _f1:{flexDirection:'row',backgroundColor:'rgb(231, 76, 60)',height:40},
});
