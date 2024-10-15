const Shop = require('../models/Shop')

// Create a new shop
const createShop = async (req, res) => {
  try {
    const shop = await Shop.create({...req.body})
    res.send(shop)
  } catch (error) {
    throw(error)
  }
}

// Read all shops and populate items
const getShops = async (req, res) => {
  try {
    const shop = await Shop.find({}).populate('items.itemId')
    res.send(shop)
  } catch (error) {
    throw(error)
  }
}

// // Read a single shop and populate items
// exports.getShopById = async (req, res) => {
//   try {
//     const shop = await Shop.findById(req.params.id).populate('items.itemId');
//     if (!shop) return res.status(404).json({ message: 'Shop not found' });
//     res.status(200).json(shop);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Update a shop
const updateShop = async (req, res) => {
  try {
    const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).populate('items.itemId')
   
    res.send(shop)
  } catch (error) {
    throw(error)
  }
}

// Delete a shop
const deleteShop = async (req, res) => {
  try {
     await Shop.findByIdAndDelete(req.params.id)
    
     res.send({ msg: 'Shop Deleted', status: 'Ok' })
  } catch (error) {
    throw(error)
  }
}

module.exports = {
  createShop,
  getShops,
  updateShop,
  deleteShop
}