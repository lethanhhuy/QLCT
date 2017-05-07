'use strict'
import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import SearchHeaderComponent from 'react-native-search-header';
import Add from 'QLCT/src/component/Add.js';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';
import Data from './Data';
import TheLoai from 'QLCT/src/TheLoai/TheLoai.js';
import ImageEl from 'QLCT/src/TheLoai/ImageEl.js';
const SearchHeader = SearchHeaderComponent();
//const window=Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
var text;
export default class CateAdd extends Component {
  state = {
    images: [
      {
        title: 'Ăn Uống',
        img: require('QLCT/images/theloai/Food-96.png')
      }, {
        title: 'Mua Sắm',
        img: require('QLCT/images/theloai/Shopping-96.png')
      }, {
        title: 'Gia Đình',
        img: require('QLCT/images/theloai/Home-96.png')
      }, {
        title: 'Di Chuyển',
        img: require('QLCT/images/theloai/Shuttle-96.png')
      }, {
        title: 'Giải Trí',
        img: require('QLCT/images/theloai/Mosaic-96.png')
      }, {
        title: 'Du Lịch',
        img: require('QLCT/images/theloai/Airplane-96.png')
      }, {
        title: 'Hóa Đơn',
        img: require('QLCT/images/theloai/Bitcoin-96.png')
      }, {
        title: 'Đầu Tư',
        img: require('QLCT/images/theloai/Invest-96.png')
      }, {
        title: 'Sức Khỏe',
        img: require('QLCT/images/theloai/Health-96.png')
      },
      {
        title: 'Khác',
        img: require('QLCT/images/theloai/Money-96.png')
      }
    ],
    imagesReference: [],
    text: '',
  }

  componentDidMount() {
    this.setState({imagesReference: this.state.images});
  }

  saveImg(){
        return(
          Data.SetImg(this.state.images)
        )
  }

  search(text) {
    let imgArr = this.state.images;
    this.setState({text: text});
    for (var i = 0; i < imgArr.length; i++) {
      if (text === imgArr[i].title) {
        this.setState({
          images: [imgArr[i]]
        })
        console.log(imgArr[i].title)
      }
    }

    if (!text) {
      this.setState({images: this.state.imagesReference})
    }
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.thumb} >
        <TouchableOpacity onPress={this.saveImg(),this.props.clickSub} >
          <ImageEl imgsource={val.img} textsource={val.title} />
      </TouchableOpacity>
      </View>
    });
    var _scrollView : ScrollView;
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white'
      }} >

        <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          <View style={styles.status}/>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.props.clickMain}>
              <Image source={require('QLCT/images/ic_arrow_back_white_2x.png')} style={{
                height: 30,
                width: 30
              }}/>
            </TouchableOpacity>
            <Text style={styles.label}>Chi Tiêu</Text>
            <Button title='Tìm Kiếm' fontWeight='600' color='#42729B' backgroundColor='#00bcd4' onPress= {() => this.searchHeader.show()}/>
          </View>
          <SearchHeader ref={(searchHeader) => {
            this.searchHeader = searchHeader;
          }} statusHeightOffet={8}
          placeholder='Nhập Tìm Kiếm' value={this.state.text} onChangeText={(text) => this.search({text})}
          />
        </View>
        <View style={{
          flex: 7
        }}>
          <TouchableOpacity style={styles._button} onPress={() => {
            _scrollView.scrollTo({y: 0});
          }}>
            <Text>Scroll to top</Text>
          </TouchableOpacity>

            <ScrollView ref={(scrollView) => {
              _scrollView = scrollView;
            }} automaticallyAdjustContentInsets={false} onScroll={() => {
              console.log('onScroll!');
            }} scrollEventThrottle={200} style={styles.scrollView}
             >

                 {images}
              {/*<TheLoai />*/}
              {/*THUMB_URLS.map(createThumbRow)*/}
            </ScrollView>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  _button: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#83D6DE',
    borderRadius: 20
  },
  img: {
    marginHorizontal: 12,
    width: 50,
    height: 50
  },
  thumb: {
    margin: 5,
    padding: 5,
    backgroundColor: '#FEFEFE',
    borderRadius: 3,
    minWidth: 96,
    flexDirection: 'row'
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300
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
    flexDirection: 'row'
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
    marginLeft: 135
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    marginTop: 20,
    borderRadius: 2,
    backgroundColor: `#ff5722`
  }
});
