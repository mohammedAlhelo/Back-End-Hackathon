const {Schema} = require('mongoose')

const rideSchema= new Schema (
  {
    title:{type:String},
    capacityLimit:{type:String},
    heightLimit:{type:String},
    deathRisk:{type:String}
  }
)

module.exports=rideSchema