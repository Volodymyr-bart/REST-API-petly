const express = require('express');
const router = express.Router();
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');

const { notices: ctrl } = require('../../controllers');
const {
  noticeValidationSchema,
  // noticeToFavoriteValidationSchema,
} = require('../../models/notices');

router.post(
  '/',
  authenticate,
  validateBody(noticeValidationSchema),
  ctrlWrapper(ctrl.addNotice)
);

router.get('/category/:showCategory', ctrlWrapper(ctrl.getNoticesByCategory));

router.get('/:noticeId', ctrlWrapper(ctrl.getNoticeById));

router.delete('/:noticeId', authenticate, ctrlWrapper(ctrl.deleteNotice));

router.patch(
  '/:noticeId/favorite-add',
  authenticate,
  // validateBody(noticeToFavoriteValidationSchema),
  ctrlWrapper(ctrl.addToFavorite)
);

router.patch(
  '/:noticeId/favorite-remove',
  authenticate,
  // validateBody(noticeToFavoriteValidationSchema),
  ctrlWrapper(ctrl.removeFromFavorite)
);

module.exports = router;
