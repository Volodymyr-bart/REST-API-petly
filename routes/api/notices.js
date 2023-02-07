const express = require('express');
const router = express.Router();
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');

const { notices: ctrl } = require('../../controllers');
const { noticeValidationSchema } = require('../../models/notices');

// додавання оголошень відповідно до обраної категорії
router.post(
  '/',
  authenticate,
  validateBody(noticeValidationSchema),
  ctrlWrapper(ctrl.addNotice)
);

// отримання оголошень по категоріям
router.get('/category/:showCategory', ctrlWrapper(ctrl.getNoticesByCategory));

// отримання оголошень авторизованого користувача доданих ним же в обрані
router.get(
  '/ads/favorite',
  authenticate,
  ctrlWrapper(ctrl.getMyFavoriteAdsCategory)
);

// отримання оголошень авторизованого кристувача створених цим же користувачем
router.get('/ads/my', authenticate, ctrlWrapper(ctrl.getMyAdsCategory));

// отримання одного оголошення
router.get('/:noticeId', ctrlWrapper(ctrl.getNoticeById));

// видалення оголошення авторизованого користувача створеного цим же
router.delete('/:noticeId', authenticate, ctrlWrapper(ctrl.deleteNotice));

// додавання оголошення до обраних
router.patch(
  '/:noticeId/favorite-add',
  authenticate,
  ctrlWrapper(ctrl.addToFavorite)
);

// видалення оголошення авторизованого користувача доданих цим же до обраних
router.patch(
  '/:noticeId/favorite-remove',
  authenticate,
  ctrlWrapper(ctrl.removeFromFavorite)
);

module.exports = router;
