const { HttpError } = require('../../helpers');
const { Notice } = require('../../models');

const getNoticesByCategory = async (req, res, next) => {
  const { _id } = req.params;

  const result = await Notice.find({
    author: _id,
  });

  if (!result) {
    const error = HttpError(404);
    throw error;
  }

  res.json({ status: 'success', code: 200, result });
};

module.exports = getNoticesByCategory;
