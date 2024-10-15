const {hotel}=require('../models')

const Gethotels=async(req,res)=>{
  try{
    const hotels=await hotel.find({})
    res.send(hotels)
  }catch(error){
    throw error
  }
}

const Createhotel= async (req,res)=>{
  // you wil need a kitchen to create hotel, i will guide myself out
  try{
    const hotel=await hotel.create({...req.body})
    res.send(hotel)
  }catch(error){
    throw error
  }
}

const Deletehotel=async(req,res)=>{
  try{
    await hotel.deleteOne({_id:req.params.hotel_id})
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
  }

  module.exports={
    Gethotels,
    Createhotel,
    Deletehotel,
  }