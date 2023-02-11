const { User } = require('../../models/user');
const { uploadToCloudinary } = require('../../helpers');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { body, file } = req;

  let userAvatar = null;

  if (file) {
    const path = file.path;
    userAvatar = await uploadToCloudinary(path, 'userAvatars', 233, 233);
  }

  const user = await User.findByIdAndUpdate(
    _id,
    { body, userAvatar },
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  );

  if (!user) res.status(404);

  res.status(200).json({ _id, success: true, data: user });
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
