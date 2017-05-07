
 'use strict';

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Dimensions,
   Text,
   Image,
   TouchableOpacity,
   View,
   AsyncStorage,
   StatusBar,
   Picker,
   ScrollView,
 } from 'react-native';
 import ActionButton from 'react-native-circular-action-menu';
 import Drawer from 'react-native-drawer';
 import Menu from './././Menu.js';
 //import Login from './././Login.js';
 import Date from './././Date.js';
 import Data from './Data.js';

 const DEVICE_WIDTH = Dimensions.get('window').width;

var text,
ql,
chonvi;

export default class Main extends Component {
  constructor(props) {
    super(props);
    chonvi = ['Cash', 'B', 'C'];
    this.state = {
      doc: '',

    };
  }
  componentWillMount() {
    Data.Set(0, null);
    text = Data.Get();
  }

 Maps() {
    ql = Data.GetMap();
  }

save = async() => {
  try {
    await AsyncStorage.setItem('@key', text[0].money);
    console.log('SAVE OK!!!!!');
  } catch (e) {
    console.log(e);
  }
}

get = async() => {
  try {
    const v = await AsyncStorage.getItem('@key');
    console.log(v);
  } catch (e) {
    console.log(e)
  }
}

  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };

  renderItem() {
    const items = [];
    for (let item of chonvi) {
       items.push(<Picker.Item key={item} label={item} value={item} />)
    }
    return items
  }


  render() {
    console.log(text);
    this.Maps();
    return (

      <Drawer
        type="overlay"
        tapToClose
        ref={(ref) => this.drawer = ref}
        style={{ shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }}
        content={<Menu navigator={this.props.navigator} />}
         openDrawerOffset={0.4}
         panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={{
                    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
                    main: { paddingLeft: 3 }
                }}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })} >

          <View style={{ flex: 1 }}>
            <StatusBar hidden />
             <StatusBar barStyle='light-content' />
             <View style={styles.status} />
             <View style={_styles._f0}>
               <View style={_styles._f1}>
                 <Button style={_styles.actionButtonIcon} onPress={() => this.openControlPanel()}>
                   <Image
                     source={require('QLCT/images/ic_menu_white_36dp.png')}
                   />
                 </Button>
                 <Text style={_styles.top}>Tổng Quan</Text>
                </View>
               {/*<View style={{justifyContent:'center', alignItems:'center'}}>
                  <TouchableOpacity onPress={this.props.clickDN}>
                    <View
                    style={{justifyContent:'center',alignItems:'center',height:50, width:100, borderRadius:15, backgroundColor:'blue',marginTop:5}}
                    >
                          <Text style={{color:'white'}}>Đăng nhập</Text>
                    </View>
                  </TouchableOpacity>
                </View><View style={{justifyContent:'center', alignItems:'center'}}>
                   <TouchableOpacity onPress={this.props.clickFB}>
                     <View style={{justifyContent:'center',alignItems:'center',height:50, width:100, borderRadius:15, backgroundColor:'blue',marginTop:5}}>
                           <Text style={{color:'white'}}>Đăng nhập</Text>
                     </View>
                   </TouchableOpacity>
                 </View>*/}
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <Date />
                    <Picker
                      style={{ width:100, alignItems: 'center' }}
                      selectedValue={this.state.selected}
                        onValueChange={(value) => this.setState({ selected: value })} >
                          {this.renderItem()}
                    </Picker>

                </View>
                <View style={styles.thumb}>
                  <Text style={{ fontSize: 15 }} >
                    Tổng tiền :
                  </Text>
                </View>
                <View >
                    {ql.map(function(o,i) {
                      return (
                          <ScrollView key={i} >
                              <Text style={{ fontSize: 17, color: '#249991', textAlign: 'center' }}>
                                {o.date}
                                {o.money}
                              </Text>
                              <View>
                                {o.hinh}
                              </View>

                          </ScrollView>
                      );
                    })}
                  </View>
                  {(() => { this.save(), this.get() })()}
                {/*<Text style={{fontSize:20,marginTop:150}}>
                   {text[0].money}
                </Text>*/}


                    <ActionButton buttonColor='rgba(231,76,60,1)'>
                      <ActionButton.Item buttonColor='#9b59b6' onPress={this.props.clickCateAdd}>
                          <Text
                            style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center' }}
                            >
                            +
                          </Text>
                      </ActionButton.Item>
                      <ActionButton.Item buttonColor='#3498db' t onPress={this.props.clickCateSub}>
                        <Text
                          style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center' }}
                          >
                          -
                        </Text>
                      </ActionButton.Item>

                    </ActionButton>

                </View>
            </View>
      </Drawer>
    );
  }


}

class Button extends Component{
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}
        >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}


const _styles = StyleSheet.create(
  {
    chart: {
       width: 50,
       height: 50,
   },
    _f0: {
      backgroundColor: '#ECF0F1',
      flex: 1,
    },
    _f1: {
      flexDirection: 'row',
      backgroundColor: 'rgb(231, 76, 60)',
      height: 40,

    },
    top: {
      color: 'white',
      backgroundColor: 'rgb(231, 76, 60)',
      paddingTop: 4,
      paddingLeft: 25,
      fontWeight: 'bold',
      fontSize: 20,
    },
    actionButtonIcon: {
     paddingTop: 4,
    },
    img: {
       paddingTop: 35,
       paddingLeft: 30,
       width: 10,
       height: 10,
     },
  }
);

const styles = StyleSheet.create({
  status: {
      zIndex: 10,
      elevation: 2,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: '#F1654C'
  },
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
 money: {
   //alignItems: 'center',
   marginLeft: 10,
   justifyContent: 'center',
   //borderBottomWidth:0.5,
   //borderColor:'green'
 },
 thumb: {
  margin: 5,
  padding: 5,
  height: 70,
  backgroundColor: '#FEFEFE',
  borderRadius: 3,
  minWidth: 96,
  flexDirection: 'row'
},
});
