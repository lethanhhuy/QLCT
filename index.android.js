/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   Navigator
 } from 'react-native';

 import Firebase from './src/component/Firebase.js';
 import Intro from './src/component/Intro.js';
 import Add from './src/component/Add.js';
 import Main from './src/component/Main.js';

 //import Intro from 'QLCT/src/component/Intro.js';
 import CateSub from './src/component/CateSub.js';
 import Sub from './src/component/Sub.js';
 import CateAdd from './src/component/CateAdd.js';
 import Login from './src/component/Login.js';
 import WebViewdemo from './src/component/WebViewdemo.js';

export default class QLCT extends Component {

  renderScene(route, navigator) {
     switch (route.name) {

      //case 'main': return(<Main clickDN={()=>{navigator.push({name:"login"});}}/>)
        case 'intro' : return (<Intro
                                done={() => { navigator.replace({ name: 'main' }); }}
                               skip={() => { navigator.replace({ name: 'main' }); }}
        />);
      case 'main': return (<Main
        clickCateSub={() => { navigator.push({ name: 'catesub' }); }}
        clickDN={() => { navigator.push({ name: 'login' }); }}
        clickFB={() => { navigator.push({ name: 'firebase' }); }}
        clickCateAdd={() => { navigator.push({ name: 'cateadd' }); }}
      />);
      case 'firebase': return (<Firebase
        clickMain={() => { navigator.push({ name: 'main' }); }}
      />);
      case 'add' : return (<Add
                            clickCateAdd={() => { navigator.push({ name: 'cateadd' }); }}
                            Close={() => { navigator.pop({ name: 'main' }); }}
                            gosave={() => { navigator.pop({ name: 'main' }); }}
      />);
      //case 'close' :return(<Add Close={()=>{navigator.push({name:"main"});}}/>/>);
      case 'cateadd': return (<CateAdd
      clickMain={() => { navigator.pop({ name: 'main' }); }}
      clickSub={() => { navigator.push({ name: 'sub' }); }}
      />);
      case 'catesub': return (<CateSub
                              gosaveCate={() => { navigator.pop({ name: 'cate' }); }}
                              clickMain={() => { navigator.pop({ name: 'main' }); }}
                              clickSub={() => { navigator.push({ name: 'sub' }); }}
      />);
      case 'sub': return (<Sub
        clickCate={(e) => { navigator.push({ name: 'cate', money: e }); }}
        clickCateAdd={() => { navigator.push({ name: 'cateadd' }); }}
        Close={() => { navigator.popToTop({ name: 'main' }); }}
        gosave={() => { navigator.popToTop({ name: 'main' }); }}
      />);

      case 'login' : return (<Login
                          go={() => { navigator.push({ name: 'WebViewdemo' }); }}
                          gosaveFB={() => { navigator.pop({ name: 'main' }); }}
      />);
      case 'WebViewdemo' : return (<WebViewdemo
        pop={() => { navigator.pop({ name: 'login' }); }}
      />);

      default:
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'main' }}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('QLCT', () => QLCT);
