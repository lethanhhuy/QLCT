import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';



export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight style={[styles.inputButton,this.props.highlight ? styles.inputButtonHighlighted : null]}
              underlayColor="#F2784B"
              onPress={this.props.onPress}>
                <Text style={{fontSize: 20,fontWeight: '400',color: 'black'}}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
  inputButton:{
    flex: 1,alignItems: 'center',justifyContent: 'center',borderColor: '#91AA9D'
  },
  inputButtonHighlighted: {
       backgroundColor: '#F2784B'
   },

});
