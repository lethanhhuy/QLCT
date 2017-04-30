
var myfb=[
  {fb1:0,}
]

var maps=[{a:0,}]

var text = [
  {
    gia:0,
  }
]

var Data ={
  Get(){
    return text
  },
  Set(value,money){
    text[value].money=money

  },
  GetMap(){
    return maps
  },
  SetMap(money,date,loai,hinh){
    maps=maps.concat([{money:money,date:date,loai:loai,hinh:hinh}])
  }
}


 module.exports = Data
