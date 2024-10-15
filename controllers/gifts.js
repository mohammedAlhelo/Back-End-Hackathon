const Gifts = require('../models/Gifts');

const createGifts = async (req, res) => {
  try {
    const gift = await Gifts.create({ ...req.body });
    res.send(gift); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Get all gifts
const getGifts = async (req, res) => {
  try {
    const gifts = await Gifts.find({});
    res.status(200).send(gifts); 
  } catch (error) {
    console.error("Error fetching gifts:", error);
    res.status(400).json({ message: error.message }); 
  }
}

// Update a gift
const updateGifts = async (req, res) => {
  try {
   const gift = await Gifts.findByIdAndUpdate(req.params.post_id, req.body, {new: true})
    res.send(gift)
    }

   catch (error) {
    throw(error)
  }
}

// Delete a gift
const deleteGifts = async (req, res) => {
  try {
    await Gifts.deleteOne({ _id: req.params.gifts_id })
    res.send({ msg: 'Gift Deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGifts,
  getGifts,
  updateGifts,
  deleteGifts
};