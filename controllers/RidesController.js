const {ride}=require('../models/')

const GetRides=async(req,res)=>{
  try{
    const rides=await ride.find({})
    res.send(rides)
  }catch(error){
    throw error
  }
}

const CreateRide= async (req,res)=>{
  // you wil need a kitchen to create ride, i will guide myself out
  try{
    const rid=await ride.create({...req.body})
    res.send(rid)
  }catch(error){
    throw error
  }
}

const DeleteRide=async(req,res)=>{
  try{
    await ride.deleteOne({_id:req.params.ride_id})
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
  }

  module.exports={
    GetRides,
    CreateRide,
    DeleteRide,
  }