const mongoose = require('mongoose')
const foodSchema= require('./food')
const hotelsSchema=require('./hotels')
const ridesSchema=require('./rides')
const userSchema = require('./User')


const food =mongoose.model('food', foodSchema)
const hotel =mongoose.model('hotel',hotelsSchema)
const ride=mongoose.model('ride',ridesSchema)
const User = mongoose.model('User', userSchema)
module.exports={
  User,
  food,
  hotel,
  ride
}