import React, { Component } from 'react';
import { AppRegistry, Alert,Navigator } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class Intro extends Component {
  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
  }
/*  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }*/
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Lê Thanh Huy',
      description: 'Thành Viên',
      img: require('QLCT/images/lehuy.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#E74C3C',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Nguyễn Thị Tuyết Anh',
      description: 'Thành Viên',
      img:require('QLCT/images/canh.png') ,
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#A5E65A',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle,this.props.done}
        onSkipBtnClick={this.onSkipBtnHandle,this.props.skip}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}
