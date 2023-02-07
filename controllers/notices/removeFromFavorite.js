const { User } = require('../../models/user');

const removeFromFavorite = async (req, res, next) => {
  const { _id } = req.user;
  const { noticeId } = req.params;

  const result = await User.findOneAndUpdate(
    _id,
    { $pull: { favorites: noticeId } },
    { new: true }
  );

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = removeFromFavorite;
