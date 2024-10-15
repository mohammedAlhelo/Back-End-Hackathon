const router = require('express').Router()
const controller = require('../controllers/gifts')

router.get('/', controller.getGifts)
router.post(
  '/',
  controller.createGifts
)

router.put(
  '/gifts_id',
  controller.updateGifts
)

router.delete(
  ':gifts_id',
  controller.deleteGifts
)

module.exports = router