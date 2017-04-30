/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'


 import React,{Component} from 'react';
 import SideMenu from 'react-native-side-menu';
 import ActionButton from 'react-native-circular-action-menu';
 import {Icon} from 'react-native-elements'
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   View,
   AsyncStorage,
   Navigator
 } from 'react-native';

 import Firebase from 'QLCT/src/component/Firebase.js';
import Intro from 'QLCT/src/component/Intro.js'

 import Menu from 'QLCT/src/component/Menu.js';
 import Add from 'QLCT/src/component/Add.js';
 import Main from 'QLCT/src/component/Main.js';
 import Category from './src/component/Category.js';

 //import Intro from 'QLCT/src/component/Intro.js';

 import Sub from 'QLCT/src/component/Sub.js'
 import CateAdd from 'QLCT/src/component/CateAdd.js'

 import Login from 'QLCT/src/component/Login.js';
 import WebViewdemo from 'QLCT/src/component/WebViewdemo.js';

const _uri='./1489787906_49.png';

export default class QLCT extends Component {

  renderScene(route,navigator){
    switch (route.name){

      //case 'main': return(<Main clickDN={()=>{navigator.push({name:"login"});}}/>)
        case 'intro' : return ( <Intro done={()=>{navigator.replace({name:"main"});}}
                               skip={()=>{navigator.replace({name:"main"});}}
        />);
      case 'main': return( <Main
        clickAdd={()=>{navigator.push({name:"sub"});}}
        clickDN={()=>{navigator.push({name:"login"});}}
        clickFB={()=>{navigator.push({name:"firebase"});}}
        clickSub={()=>{navigator.push({name:"sub"});}}
      /> );

      case 'firebase': return ( <Firebase clickMain={()=>{navigator.push({name:"main"});}}/>);
      case 'add' : return( <Add
                            clickCateAdd={()=>{navigator.push({name:"cateadd"});}}
                            Close={()=>{navigator.pop({name:"main"});}}
                            gosave={()=>{navigator.pop({name:"main"});}}

      />);
      //case 'close' :return(<Add Close={()=>{navigator.push({name:"main"});}}/>/>);
      case 'cate': return( <Category clickMain={(e,f)=>{navigator.push({name:"main",urlHinh:e,money:f});}}
        MONEY = {route.money}
      />);
      case 'cateadd': return ( <CateAdd
                              gosaveCate={()=>{navigator.pop({name:"cate"});}}
                              clickAdd={()=>{navigator.pop({name:'add'})}}
      />)
      case 'sub':  return( <Sub clickCate={(e)=>{navigator.push({name:"cate",money:e});}}
        clickCateAdd={()=>{navigator.push({name:"cateadd"});}}
        Close={()=>{navigator.pop({name:"main"});}}
        gosave={()=>{navigator.pop({name:"main"});}}
      />);

      case "login" : return(<Login go={()=>{navigator.push({name:"WebViewdemo"});}}
                          gosaveFB={()=>{navigator.pop({name:"main"});}}
      />);
      case "WebViewdemo" : return (<WebViewdemo pop={()=>{navigator.pop({name:"login"})}}/>);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:"intro"}}
        renderScene={this.renderScene}
      />
    );
  }
}


const _styles = StyleSheet.create(
  {
    _f0:{
      backgroundColor: '#E0E0E0',
      flex:1,
    },
    _f1:{
      backgroundColor:'rgb(231, 76, 60)',
      height:50,
    },
    _top:{
      color:'#ecf0f1',
      backgroundColor:'rgb(231, 76, 60)',
      paddingTop: 10,
      paddingLeft: 60,
      fontWeight:'bold',
      fontSize:20,
    },
    actionButtonIcon: {
     fontSize: 20,
     height: 22,
     color: 'white',
   },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  actionButtonIcon: {
   fontSize: 20,
   height: 22,
   color: 'white',
 },

});

AppRegistry.registerComponent('QLCT', () => QLCT);
