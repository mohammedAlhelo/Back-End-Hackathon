const router=require('express').Router()
const controller=require('../controllers/RidesController')

router.get('/',controller.GetRides)
router.post('/',controller.CreateRide)
router.delete('/:ride_id', controller.DeleteRide)

module.exports=router