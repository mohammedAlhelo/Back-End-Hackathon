const mongoose = require('mongoose')
const foodSchema= require('./food')
const hotelsSchema=require('./hotels')
const ridesSchema=require('./rides')

const food =mongoose.model('food', foodSchema)
const hotels =mongoose.model('hotels',hotelsSchema)
const rides=mongoose.model('rides',ridesSchema)

module.exports={
  food,
  hotels,
  rides
}