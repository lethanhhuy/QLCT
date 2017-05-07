import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';
import Img1 from 'QLCT/images/theloai/Food-96.png';
import Img2 from 'QLCT/images/theloai/Shopping-96.png';
import Img3 from 'QLCT/images/theloai/Home-96.png';
import Img4 from 'QLCT/images/theloai/Shuttle-96.png';
import Img5 from 'QLCT/images/theloai/Mosaic-96.png';
import Img6 from 'QLCT/images/theloai/Airplane-96.png';
import Img7 from 'QLCT/images/theloai/Bitcoin-96.png';
import Img8 from 'QLCT/images/theloai/Invest-96.png';
import Img9 from 'QLCT/images/theloai/Health-96.png';

import Img0 from 'QLCT/images/ic_keyboard_arrow_right_black_36dp.png';


export default class TheLoai extends Component{
  render() {
    return (
      <View >
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img1} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Ăn uống
            </Text>
            <Image
              style={{ marginLeft: 217, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img2} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Mua Sắm
            </Text>
            <Image
              style={{ marginLeft: 211, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img3} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Gia Đình
            </Text>
            <Image
              style={{ marginLeft: 215, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img4} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Di Chuyển
            </Text>
            <Image
              style={{ marginLeft: 205, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img5} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Giải Trí
            </Text>
            <Image
              style={{ marginLeft: 225, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img6} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Du Lịch
            </Text>
            <Image
              style={{ marginLeft: 224, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img7} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Hóa Đơn
            </Text>
            <Image
              style={{ marginLeft: 215, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img8} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Đầu Tư
            </Text>
            <Image
              style={{ marginLeft: 225, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thumb} >
          <TouchableOpacity
            style={styles.ab}
          >
            <Image style={styles.img} source={Img9} />
            <Text style={{ marginLeft: 20, fontWeight: '700', color: 'green' }} >
              Sức Khỏe
            </Text>
            <Image
              style={{ marginLeft: 210, width: 30, height: 30}}
              source={Img0}
            />
          </TouchableOpacity>
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
   width: 50,
   height: 50,
 },
 ab: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
 }
})
