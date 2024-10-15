const {Schema} = require('mongoose')

const ridesSchema= new Schema (
  {
    title:{type:String},
    description:{type:String},
    timeRequired:{type:Number}
  }
)

module.exports=ridesSchema