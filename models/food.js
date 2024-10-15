const {Schema} = require('mongoose')

const foodSchema= new Schema (
  {
    title:{type:String},
    description:{type:String},
    foodType:{type:String},
    price:{type:String}
  }
)

module.exports=foodSchema