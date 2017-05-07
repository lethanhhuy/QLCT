
var myfb=[
  {fb1:0,}
]

var maps=[{a:0,}]
var mapx=[{
  title: 'Ăn Uống',
  img: require('QLCT/images/theloai/Food-96.png')
}]
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
  SetMap(money,date,loai,hinh,text){
    maps = maps.concat([{ money: money, date: date, loai: loai, hinh: hinh, text: text}])
  },
  GetImg() {
    return mapx
  },
  SetImg(title, img){
    mapx = mapx.concat([{ title:title ,img: img }])
  }
}

 module.exports = Data
