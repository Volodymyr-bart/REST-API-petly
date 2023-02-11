const { Notice } = require("../../models");

const getMyAdsCategory = async (req, res) => {
  const { _id } = req.user;

  const result = await Notice.find({ author: _id });

  res.status(201).json({
    status: "success",
    code: 201,
    result,
  });
};

module.exports = getMyAdsCategory;
