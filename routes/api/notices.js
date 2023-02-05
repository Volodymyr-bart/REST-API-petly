const express = require('express');
const router = express.Router();
const { ctrlWrapper } = require('../../helpers');

const { notices: ctrl } = require('../../controllers');

router.post('/', ctrlWrapper(ctrl.addNotice));

router.get('/category/:showCategory', ctrlWrapper(ctrl.getNoticesByCategory));

router.get('/:noticeId', ctrlWrapper(ctrl.getNoticeById));

router.delete('/:noticeId', ctrlWrapper(ctrl.deleteNotice));

module.exports = router;
