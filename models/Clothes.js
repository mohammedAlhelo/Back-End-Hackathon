// models/Clothes.js
const mongoose = require('mongoose');
const { Schema } = mongoose;


const clothesSchema = new Schema({
  name: { type: String, required: true },
  image: {type: String, required:true},
  size: { type: String, required: true },
  price: { type: Number, required: true },
  
}, { timestamps: true });

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;