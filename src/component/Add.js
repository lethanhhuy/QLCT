'use strict'
import React,{Component} from 'react';
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
  AsyncStorage,
  Picker,
  Item,
}from 'react-native';

import {Button} from 'react-native-elements';
import Data from './Data.js';
import Firebase from 'QLCT/src/component/Firebase.js';
import firebase from 'firebase';
import Date from 'QLCT/src/component/Date.js'
import InputButton from './InputButton.js'

const window=Dimensions.get('window');

var chonvi;

const inputButtons = [

    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, 'AC', '=', '+'],
];


export default class Add extends Component{
  constructor(props) {
   super(props);
   chonvi=['a','b','c'];
   this.state = {
     clear_text:'0',
     ghi:'',
     selected:'Ví Tiền',
     previousInputValue:0,
     inputValue: 0,
     selectedSymbol:null,
   };
 }
 click(e){
   this.setState({
     money_total: this.state.text +e,
     text: this.state.text + e
   });
 }
 clear(){
   this.setState({
     inputValue: this.state.clear_text
   });
 }

 save = async()=>{
   try{
     await AsyncStorage.setItem(this.state.inputValue, this.state.ghi);
     console.log("SAVE OK!!!!!");
   }
   catch(e){
     console.log(e)
   }
 }

 get = async()=>{
   try{
     var v = await AsyncStorage.getItem(this.state.inputValue);
     console.log(v);
   }catch(e){
     console.log(e)
   }
 }


 /*saveMoney(){
   return(
     Data.Set(0,this.state.text)
   )
 }*/
 saveMap(){
   return(
     Data.SetMap(this.state.inputValue)
   )
 }

 renderItem(){
   var items=[];
   for (let item of chonvi){
      items.push(<Picker.Item key={item} label={item} value={item}/>)
   }
   return items
 }


  render(){
    console.log(AsyncStorage)
    return(
        <View style={{flex:1}}>
          <View style={styles._f0}>
            <View style={styles._f1}>
              <TouchableOpacity onPress={this.props.Close}>
                  <Image source={require('QLCT/images/ic_close_white_24dp.png')}/>
              </TouchableOpacity>
              <Text style={{color: 'white',
              backgroundColor:'rgb(231, 76, 60)',
              paddingTop: 4,
              marginLeft:125,
              fontWeight:'bold',
              fontSize:20,}}>
                Thu Nhập
              </Text>
              <TouchableOpacity style={styles.actionButtonIcon} onPress={()=>{/*this.saveMoney(),*/this.saveMap(),this.state.inputValue==0?alert('Chưa nhập tiền'):this.props.gosave()}}>
                  <Image source={require('QLCT/images/ic_done_white_24dp.png')}/>
              </TouchableOpacity>
            </View>
          </View>
              <View style={styles.backGround}>
                <View style={{marginTop:10,alignItems:'center',flex:2,flexDirection:'column'}}>
                    <Date/>
                    <TouchableOpacity style={{marginTop:5,width:100,borderRadius:5,borderColor:'#F2784B',borderWidth:1.5,alignItems:'center'}} onPress={this.props.clickCateAdd}>
                      <Text style={{fontSize:15,color:'#F2784B'}}>
                        Danh Mục
                      </Text>
                    </TouchableOpacity>
                      <Picker selectedValue={this.state.selected}
                          onValueChange={(value) => this.setState({selected: value})}>
                            {this.renderItem()}
                      </Picker>
                </View>
              </View>
            <View style={{flex: 2.5, backgroundColor: '#1BBC9B'}}>
               <Text style={{color: 'white',fontSize: 36,fontWeight: '400',textAlign: 'right',padding: 20}}
                 onChangeText={(ghi) => this.setState({ghi})}
                   value={this.state.ghi}>
                 {this.state.inputValue}
               </Text>
            </View>
               <View style={{flex: 5, backgroundColor: '#FFFFFF'}}>
                 {this._renderInputButtons()}
               </View>
        </View>
    );
  }
  _renderInputButtons() {
       let views = [];

       for (var r = 0; r < inputButtons.length; r ++) {
           let row = inputButtons[r];

           let inputRow = [];
           for (var i = 0; i < row.length; i ++) {
               let input = row[i];

               inputRow.push(
                   <InputButton value={input}
                     highlight={this.state.selectedSymbol === input}
                     onPress={this._onInputButtonPressed.bind(this, input)}
                      key={r + "-" + i} />
               );
           }
           views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
       }

       return views;
   }

     _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)

        }
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                    let symbol = this.state.selectedSymbol,
                        inputValue = this.state.inputValue,
                        previousInputValue = this.state.previousInputValue;

                    if (!symbol) {
                        return;
                    }

                    this.setState({
                        previousInputValue: 0,
                        inputValue: eval(previousInputValue + symbol + inputValue),
                        selectedSymbol: null
                    });
                    break;
            case 'AC':
                this.clear()
              break;

        }
    }


    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        })
    }



}


const styles = StyleSheet.create({
  inputRow: {
          flex: 1,
          flexDirection: 'row'
      },
  backGround:{
    flex:3,
    backgroundColor:'#eef7ff',
    alignItems: 'center',
  },
  _button:{borderWidth:1, borderColor:"#4db6ac", width:100, height: 75, padding:10, marginBottom:20, alignItems:"center", justifyContent:"center"},
  ai:{fontSize: 20,color: 'white',paddingLeft:25,paddingTop:4,fontWeight:'bold'},
  _f0:{backgroundColor: '#f8fdff'},
  _f1:{flexDirection:'row',backgroundColor:'rgb(231, 76, 60)',height:40},
  actionButtonIcon: {
   marginLeft: 125,
  },
});
