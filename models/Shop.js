const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
  items: [
    {
      itemType: { type: String, enum: ['clothes', 'gifts'], required: true },
      itemId: { type: Schema.Types.ObjectId, required: true, refPath: 'items.itemType' }
    }
  ]
}, { timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;