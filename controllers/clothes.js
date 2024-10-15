const Clothes = require('../models/Clothes');
const Gifts = require('../models/Gifts');

// Create 
const createClothes = async (req, res) => {
  try {
    const clothes = await Clothes.create({...req.body});
    res.send(clothes);
  } catch (error) {
    throw(error)
  }
}

// Get/read
 const getClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find({});
    res.send(clothes);
  } catch (error) {
    throw error
  }
};


// update
const updateClothes = async (req, res) => {
  try {
    const clothes = await Clothes.findByIdAndUpdate(req.params.post_id, req.body, {new: true})
    
    res.send(clothes)
  } catch (error) {
    throw(error)
  }
};

// Delete
const deleteClothes = async (req, res) => {
  try {
    await Clothes.deleteOne({ _id: req.params.Gifts_id })
    res.send({ msg: 'clothes Deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createClothes,
  getClothes,
  updateClothes,
  deleteClothes
}