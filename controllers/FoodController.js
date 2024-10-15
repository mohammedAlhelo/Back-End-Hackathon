const {food}=require('../models')

const GetFoods=async(req,res)=>{
  try{
    const foods=await food.find({})
    res.send(foods)
  }catch(error){
    throw error
  }
}

const CreateFood= async (req,res)=>{
  // you wil need a kitchen to create food, i will guide myself out
  try{
    const food=await food.create({...req.body})
    res.send(food)
  }catch(error){
    throw error
  }
}

const DeleteFood=async(req,res)=>{
  try{
    await food.deleteOne({_id:req.params.food_id})
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
  }

  module.exports={
    GetFoods,
    CreateFood,
    DeleteFood,
  }