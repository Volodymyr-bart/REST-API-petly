const { HttpError } = require('../../helpers');
const { Notice } = require('../../models');

const getNoticesByCategory = async (req, res, next) => {
  const { showCategory } = req.params;

  console.log(req.headers.authorization);

  const noticesByCategory = await Notice.find({
    category: showCategory,
  });

  if (!noticesByCategory) {
    const error = HttpError(404);
    throw error;
  }

  res.json({ status: 'success', code: 200, noticesByCategory });
};

module.exports = getNoticesByCategory;
