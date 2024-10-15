const {hotel}=require('../models')

const GetHotels=async(req,res)=>{
  try{
    const hotels=await hotel.find({})
    res.send(hotels)
  }catch(error){
    throw error
  }
}

const CreateHotel= async (req,res)=>{
  // you wil need a kitchen to create hotel, i will guide myself out
  try{
    const hotl=await hotel.create({...req.body})
    res.send(hotl)
  }catch(error){
    throw error
  }
}

const DeleteHotel=async(req,res)=>{
  try{
    await hotel.deleteOne({_id:req.params.hotel_id})
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
  }

  module.exports={
    GetHotels,
    CreateHotel,
    DeleteHotel,
  }