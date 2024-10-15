const router=require('express').Router()
const controller=require('../controllers/HotelsController')

router.get('/',controller.GetHotels)
router.post('/',controller.CreateHotel)
router.delete('/:hotel_id', controller.DeleteHotel)

module.exports=router