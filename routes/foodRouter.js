const router=require('express').Router()
const controller=require('../controllers/FoodController')

router.get('/',controller.GetFoods)
router.post('/',controller.CreateFood)
router.delete('/:food_id', controller.DeleteFood)

module.exports=router