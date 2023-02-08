const { User } = require('../../models/user');
const { makeImgUrl } = require('../../helpers');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { userAvatar } = req.body;

  if (userAvatar) {
    req.body.userAvatar = await makeImgUrl(userAvatar, 'userAvatars', 233, 233);
  }

  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    context: 'query',
  });

  if (!user) res.status(404);

  res.status(200).json({ _id, success: true, data: user });
};

module.exports = updateUser;
