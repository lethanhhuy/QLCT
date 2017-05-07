'use strict'
import React,{Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
  ListView
} from 'react-native';
import profileIcon from 'QLCT/images/lehuy.png';

const window=Dimensions.get('window');


export default class Menu extends Component{
   render(){
     return(
         <View style={styles.container}>
           <Image source={profileIcon} style={styles.profile} />
         </View>


     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83D6DE',
    borderRightWidth: 3,
    borderColor: '#fff'
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 30,
    marginLeft:20
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#bbdefb',
    padding: 20,
  },

  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },

  avartar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 40,
  },
  thumb: {
   margin: 5,
   padding: 5,
   backgroundColor: '#FEFEFE',
   borderRadius: 3,
   minWidth: 96,
   flexDirection: 'row'
 },
});
