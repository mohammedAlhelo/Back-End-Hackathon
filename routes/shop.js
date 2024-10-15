const router = require('express').Router()
const controller = require('../controllers/shop')


router.get('/', controller.getShops)
router.post(
  '/',
  controller.createShop
)

router.put(
  '/:shops_id',
  controller.updateShop
)

router.delete(
  '/:shops_id',
  controller.deleteShop
)

module.exports =router