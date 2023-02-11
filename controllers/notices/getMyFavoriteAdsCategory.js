const { User } = require("../../models/user");

const getMyFavoriteAdsCategory = async (req, res) => {
  const { _id } = req.user;

  const result = await User.findOne(_id).populate("favorites");

  res.status(201).json({
    status: "success",
    code: 201,
    result: result.favorites,
  });
};

module.exports = getMyFavoriteAdsCategory;
