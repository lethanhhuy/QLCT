import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import Data from './Data.js';
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }
  saveDate(){
    return(
      Data.SetMap(this.state.date)
    )
  }
  render(){
    return (
      <DatePicker
        style={{width: 250}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2000"
        maxDate="01-01-2099"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: -2,

          },
          dateInput: {
            borderColor:'orange',
            marginLeft: 31,
            borderRadius:5
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date}),this.saveDate()}}      >

    </DatePicker>
    )
  }
}
