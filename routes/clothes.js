const router = require('express').Router()
const controller = require('../controllers/clothes')


router.get('/', controller.getClothes)
router.post(
  '/',
  controller.createClothes
)

router.put(
  '/:clothes_id',
  controller.updateClothes
)

router.delete(
  '/:clothes_id',
  controller.deleteClothes
)

module.exports = router