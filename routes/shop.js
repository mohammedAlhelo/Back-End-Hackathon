const router = require('express').Router()
const { deleteClothes } = require('../controllers/clothes')
const controller = require('../controllers/shop')
const { deleteGifts} = require('../controllers/gifts')

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


router.delete(
  '/:clothes_id', 
  deleteClothes
);


router.delete(
  '/:gifts_id', 
  deleteGifts
);

router.get('/:type', async (req, res) => {
  const { type } = req.params;

  try {
    if (type === 'clothes') {
      const clothes = await controller.getClothes(); 
      return res.json(clothes);
    } else if (type === 'gifts') {
      const gifts = await controller.getGifts(); 
      return res.json(gifts);
    } else {
      return res.status(400).json({ message: 'Invalid item type' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports =router