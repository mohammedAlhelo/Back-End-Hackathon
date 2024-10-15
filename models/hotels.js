const {Schema} = require('mongoose')

const hotelsSchema= new Schema (
  {
    title:{type:String},
    location:{type:String},
    rooms:{type:String}
  }
)

module.exports=hotelsSchema