const {Schema} = require('mongoose')

const rideSchema= new Schema (
  {
    title:{type:String},
    description:{type:String},
    timeRequired:{type:String}
  }
)

module.exports=rideSchema