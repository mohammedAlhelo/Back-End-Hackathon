const {Schema} = require('mongoose')

const hotelSchema= new Schema (
  {
    title:{type:String},
    location:{type:String},
    rooms:{type:String}
  }
)

module.exports=hotelSchema