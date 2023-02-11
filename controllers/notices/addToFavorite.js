const { User } = require("../../models/user");

const addToFavorite = async (req, res, next) => {
  const { _id } = req.user;
  const { noticeId } = req.params;

  const result = await User.findOneAndUpdate(
    _id,
    { $push: { favorites: noticeId } },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    code: 201,
    result,
  });
};

module.exports = addToFavorite;
