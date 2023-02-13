const { User } = require('../../models/user');
const { uploadToCloudinary } = require('../../helpers');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { body, file } = req;
  delete body.userAvatar;

  if (file) {
    const path = file.path;
    const userAvatar = await uploadToCloudinary(path, 'userAvatars', 233, 233);

    await User.findByIdAndUpdate(_id, { userAvatar }, { new: true });

    res
      .status(200)
      .json({ _id, success: true, message: 'Profile photo updated' });
  } else {
    const user = await User.findByIdAndUpdate(_id, body, {
      new: true,
      runValidators: true,
      context: 'query',
    });

    if (!user) res.status(404).json({ message: 'Profile not found' });

    res
      .status(200)
      .json({ _id, success: true, message: 'Profile data updated' });
  }
};
module.exports = updateUser;

/*
const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { userAvatar } = req.body;

  if (userAvatar) {
    req.body.userAvatar = await makeImgUrl(userAvatar, "userAvatars", 233, 233);
  }

  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  });

  if (!user) res.status(404);

  res.status(200).json({ _id, success: true, data: user });
};
*/
