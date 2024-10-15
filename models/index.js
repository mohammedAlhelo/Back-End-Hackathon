const mongoose = require('mongoose')
const foodSchema= require('./food')
const hotelsSchema=require('./hotels')
const ridesSchema=require('./rides')

const food =mongoose.model('food', foodSchema)
const hotel =mongoose.model('hotel',hotelsSchema)
const ride=mongoose.model('ride',ridesSchema)

module.exports={
  food,
  hotel,
  ride
}