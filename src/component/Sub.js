'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
  Picker,
  AsyncStorage,
  StatusBar
} from 'react-native';
import Button from './Button.js';
import Date from './././Date.js';
import Data from './Data.js';
var moeny_total = 0;
const DEVICE_WIDTH = Dimensions.get('window').width;

var chonvi,al;
export default class Sub extends Component{
  constructor(props) {
    super(props);
    this.state= {
      result: 0,
      formula: '',
    }
  this.onPressOperatorOrNumber = this.onPressOperatorOrNumber.bind(this)
  }
  onPressOperatorOrNumber=(symbol)=>{
    if(symbol==="X"){
      symbol="*";
    }
    this.setState({
      formula:this.state.formula+symbol
    })
  }
  onPressSubmitResult=()=>{
    try{
      this.setState({
        result:eval(this.state.formula)||0
      })
    }catch(e){
      alert("Input wrong.")
    }
  }
  backspaceOperator=()=>{
    this.setState({
      formula:this.state.formula.slice(0,this.state.formula.length-1)
    })
  }
  onPressACButton=()=>{
    this.setState({formula:""})
  }

  save = async()=>{
    try{
      await AsyncStorage.setItem(this.state.result, this.state.ghi);
      console.log("SAVE OK!!!!!");
    }
    catch(e){
      console.log(e)
    }
  }

  get = async()=>{
    try{
      var v = await AsyncStorage.getItem(this.state.result);
      console.log(v);
    }catch(e){
      console.log(e)
    }
  }
  saveMap(){
      if (this.state.result != 0) {
        return(
          Data.SetMap(this.state.result)
          )
      }
  }
  Mapx() {
     al = Data.GetImg();
   }


  render() {
    this.Mapx();
   return (
       <View style={{flex:1,backgroundColor:'#F0F1F5'}}>
         <StatusBar barStyle = 'light-content' />
         <View style = { styles.status }/>
         <View style={styles._f0}>
           <View style={styles._f1}>
             <TouchableOpacity onPress={this.props.Close}>
                 <Image source={require('QLCT/images/ic_close_white_24dp.png')}  style={{height:30,width:30,marginLeft:10,marginTop:3}}/>
             </TouchableOpacity>
             <Text style={{color: 'white',
             backgroundColor:'#26A69A',
             paddingTop: 4,
             marginLeft:135,
             fontWeight:'bold',
             fontSize:20,}}>
               Chi Tiết
             </Text>
             <TouchableOpacity style={styles.actionButtonIcon} onPress={()=>{/*this.saveMoney(),*/this.saveMap(),this.state.result==0?alert('Chưa nhập tiền'):this.props.gosave()}}>
                 <Image source={require('QLCT/images/ic_done_white_24dp.png')}  style={{height:30,width:30,marginTop:3}}/>
             </TouchableOpacity>
           </View>
         </View>
         <View style={styles.backGround}>
           <View style={{marginTop:10,alignItems:'center'}}>
               <Date/>
           </View>
           <View style={styles.thumb}>
              {/*<Image source={require('QLCT/images/lehuy.png')} style={{width:80,height:80}}/>
              <Text style={{fontSize:20,}}>
                abc45656456489789
              </Text>*/}
              <View>
                {al.map(function(o,i) {
                  <View key={i}>
                    <View>
                      {o.hinh}
                    </View>
                    <Text>
                      {o.text}
                    </Text>
                  </View>
                })}
              </View>

          </View>
         </View>
         <View style={{backgroundColor:'#B0BEC5',height:50}}>
           <View style={{flex:3,justifyContent:'center'}}>
               <Text style={[styles.resultText,{fontSize:(60-(this.state.result.toString().length))}]}
                 onChangeText={(ghi) => this.setState({ghi})}
                   value={this.state.ghi}
                   >
                 {this.state.result}
               </Text>
           </View>
         </View>
         <View style={{flex:2,flexDirection:'column',justifyContent:'flex-end'}}>
           <View style={{flex:1.5,backgroundColor:'#5F9EA0'}}>
             <View style={{flex:2,alignItems:'center',flexDirection:'row'}}>
                 <Text style={styles.formulaText}>
                   {this.state.formula}
                 </Text>
                 <TouchableOpacity  onPress={this.backspaceOperator}>
                   <Image source={require('QLCT/images/delete.png')} onPress={this.backspaceOperator}/>
                 </TouchableOpacity>

             </View>
           </View>
           <View style={styles.row}>
           <Button  style={styles.ACbutton} titleStyle ={styles.titleOperationStyle} onPress={this.onPressACButton} title="AC"/>
           <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="/"/>
           </View>
           <View style={styles.row}>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="1"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="2"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="3"/>
             <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="X"/>
           </View>
           <View style={styles.row}>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="4"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="5"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="6"/>
             <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="-"/>
           </View>
           <View style={styles.row}>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="7"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="8"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="9"/>
             <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="+"/>
           </View>
           <View style={styles.row}>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="0"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="00"/>
             <Button  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="."/>
             <Button  style={styles.equalButton} titleStyle = {styles.titleOperationStyle} onPress={this.onPressSubmitResult} title="="/>
           </View>
         </View>
       </View>
   );

 }

}
const styles =StyleSheet.create({
  thumb: {
   margin: 5,
   padding: 5,
   height: 70,
   backgroundColor: '#F0F1F5',
   borderRadius: 3,
   minWidth: 96,
   flexDirection: 'row',
   alignItems:'center'
 },
  status: {
      zIndex: 10,
      elevation: 2,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: '#00B5B5'
  },
  component:{
    flex:1,
    flexDirection:'column'
  },

  ACbutton:{
    flex:3,
    backgroundColor:'#26C6DA',
    height:35,
  },

  buttonNumber:{
    flex:1,
    height:35,

  },

  operation:{
    backgroundColor:'#D3D3D3',
    height:35,
    flex:1,

  },

  textButton:{
    color:'#E91E63',
  },
  formulaText:{
    flex:1,
    color:'white',
    textAlign :'right',
    fontSize:30,
    marginRight:16,
    fontWeight:'400'
  },

  iconStyle:{
    color:'white',
    marginLeft:16,
  },

  resultText:{
    color:'white',
    textAlign :'right',
    fontSize:60,
    marginRight:16,
    fontWeight:'400'
  },

  titleOperationStyle:{
    //color:'grey',
  },

  row:{
    flexDirection:'row',
    justifyContent: 'space-around'

  },

  equalButton:{
    backgroundColor:'#C8E6C9',
    flex:1,
    height:37,
  },
  _button:{borderWidth:1, borderColor:"#4db6ac", width:100, height: 75, padding:10, marginBottom:20, alignItems:"center", justifyContent:"center"},
  ai:{fontSize: 20,color: 'white',paddingLeft:25,paddingTop:4,fontWeight:'bold'},
  _f0:{backgroundColor: '#f8fdff'},
  _f1:{flexDirection:'row',backgroundColor:'#26A69A',height:40},
  actionButtonIcon: {
   marginLeft: 125,
  },
  backGround:{
    flex:3,
    backgroundColor:'white',
    alignItems: 'center',
  },
})
