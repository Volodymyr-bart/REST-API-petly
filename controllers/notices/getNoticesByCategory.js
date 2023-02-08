const { Notice } = require('../../models');

const getNoticesByCategory = async (req, res, next) => {
  const { showCategory } = req.params;

  const result = await Notice.find({
    category: showCategory,
  });

  res.json({ status: 'success', code: 200, result });
};

module.exports = getNoticesByCategory;
