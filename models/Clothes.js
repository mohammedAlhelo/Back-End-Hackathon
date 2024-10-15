// models/Clothes.js
const mongoose = require('mongoose');
const { Schema } = mongoose;


const clothesSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true }, // e.g., S, M, L
  color: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;