const router = require('express').Router()
const controller = require('../controllers/gifts')
const { isAdmin } = require('../middleware')

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
  isAdmin,
  controller.deleteGifts
)

module.exports = router