// models/Gifts.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const giftsSchema = new Schema({
  name: { type: String, required: true },
  image:{type: String, required:true},
  price: { type: Number, required: true },
  cursed: {type:Boolean, required:true}
  
}, 
{ timestamps: true });

const Gifts = mongoose.model('Gifts', giftsSchema); 
module.exports = Gifts; 