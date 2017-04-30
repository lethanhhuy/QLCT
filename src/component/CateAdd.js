'use strict'
import React,{Component} from 'react';
import Add from 'QLCT/src/component/Add.js';
import{
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  AsyncStorage,
  StatusBar,
}from 'react-native';
import Data from './Data.js'
import {Button} from 'react-native-elements';
import SearchHeaderComponent from 'react-native-search-header';

const SearchHeader = SearchHeaderComponent();
//const window=Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default class CateAdd extends Component{
  constructor (
          props : Object,
          context : Object
      ) {
          super(props, context);
      }
      render () {
         var _scrollView: ScrollView;
          return (
            <View style={{flex:1}}>

              <View style = { styles.container }>
                  <StatusBar barStyle = 'light-content' />
                  <View style = { styles.status }/>
                  <View style = { styles.header }>
                    <TouchableOpacity onPress={this.props.clickAdd}>
                      <Image source={require('QLCT/images/ic_arrow_back_white_2x.png')} style={{height:30,width:30}}/>
                    </TouchableOpacity>
                      <Text style = { styles.label }>Danh Mục</Text>
                      <Button
                          title = 'Find'
                          fontWeight='bold'
                          color = '#043D5D'
                          backgroundColor='#00bcd4'
                          onPress = {() => this.searchHeader.show()}
                      />
                  </View>
                  <SearchHeader
                      ref = {(searchHeader) => {
                          this.searchHeader = searchHeader;
                      }}
                      statusHeightOffet = { 21 }
                  />

              </View>
              <View style={{flex:7}} >
                <TouchableOpacity
                  style={styles._button}
                  onPress={() => { _scrollView.scrollTo({y: 0}); }}>
                  <Text>Scroll to top</Text>
                </TouchableOpacity>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }}
                    scrollEventThrottle={200}
                    style={styles.scrollView}>
                    {/*<View style={styles.thumb} >
                      <TouchableOpacity  style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                        <Image style={styles.img} source={require('QLCT/images/ex/119067.png')}/>
                        <Text style={{marginLeft:100}}>
                          Sức Khỏe
                        </Text>
                      </TouchableOpacity>

                    </View>*/}
                    {THUMB_URLS.map(createThumbRow)}

                  </ScrollView>
              </View>
          </View>
          );
      }
}

class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.thumb} >
        <TouchableOpacity >
          <Image style={styles.img} source={this.props.source}/>
        </TouchableOpacity>
      </View>
    );
  }
}


var THUMB_URLS = [
  require('QLCT/images/ex/119067.png'),
  require('QLCT/images/ex/138256.png'),
  require('QLCT/images/ex/138279.png'),
  require('QLCT/images/ex/138287.png'),
  require('QLCT/images/ex/138288.png'),
  require('QLCT/images/ex/138360.png'),
  require('QLCT/images/ex/179394.png'),
  require('QLCT/images/ex/179402.png'),
  require('QLCT/images/ex/352723.png'),
];

//THUMB_URLS = THUMB_URLS.concat(THUMB_URLS); // double length of THUMB_URLS

var createThumbRow = (uri, i) => <Thumb key={i} source={uri} />;


const styles = StyleSheet.create({
  _button: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#83D6DE',
    borderRadius: 3,
  },
  img: {
    width: 60,
    height: 60,
  },
  thumb: {
   margin: 5,
   padding: 5,
   backgroundColor: '#FEFEFE',
   borderRadius: 3,
   minWidth: 96,
   flexDirection:'row'
 },
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300,
  },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 40,
        marginBottom: 6,
        backgroundColor: '#00bcd4',
        flexDirection:'row'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        //textAlign: `center`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`,
        marginLeft:135
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});
