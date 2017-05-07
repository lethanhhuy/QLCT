import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Img0 from 'QLCT/images/ic_keyboard_arrow_right_black_36dp.png';
export default class ImageEl extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={this.props.imgsource} style={styles.img} />
        <Text style={{ marginLeft: 25, fontWeight: '700', color: 'green' }} >
          {this.props.textsource}
        </Text>
        <Image
          style={{ marginLeft:195, width: 30, height: 30}}
          source={Img0}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    width: 1,
   alignSelf: 'stretch',
 },
  img: {
    padding: 5,
    marginLeft: 10,
    width: 60,
    height: 60,
  },
})
