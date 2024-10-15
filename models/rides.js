const {Schema} = require('mongoose')

const rideSchema= new Schema (
  {
    title:{type:String},
    description:{type:String},
    timeRequired:{type:Number}
  }
)

module.exports=rideSchema