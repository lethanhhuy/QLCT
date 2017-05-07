import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import ImageEl from 'QLCT/src/TheLoai/ImageEl.js';

export default class HienThi extends Component {
  state = {
    images: [
      { title: ' ăn uống ', img: require('QLCT/images/theloai/Food-96.png') },
      { title: ' giải trí ', img: require('QLCT/images/theloai/Home-96.png') },
    ],
    imagesReference:[],
    text: '',
  }
  componentDidMount() {
    this.setState({ imagesReference: this.state.images });
  }
  render() {
    let images = this.state.images.map((val,key) => {
      return <View key={key} style={styles.thumb}>
                 <ImageEl imgsource={val.img} textsource={val.title} />
             </View>
    });
    return (
      <View >
        <View >
          {images}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
   margin: 5,
   padding: 5,
   backgroundColor: '#FEFEFE',
   borderRadius: 3,
   minWidth: 96,
   flexDirection: 'row'
  },
 img: {
   marginLeft: 10,
   width: 40,
   height: 40,
 },
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 30,
    width: (Dimensions.get('window').width/ 8) - 2,
  }
})
