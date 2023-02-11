const { Notice } = require("../../models");
const { uploadToCloudinary } = require("../../helpers");

const addNotice = async (req, res, next) => {
  const { _id } = req.user;
  const { body, file } = req;

  let petAvatar = null;

  if (file) {
    const path = file.path;
    petAvatar = await uploadToCloudinary(path, "petAvatars", 300, 300);
  }

  const result = await Notice.create({
    ...body,
    petAvatar,
    author: _id,
  });

  res.status(201).json({
    status: "success",
    code: 201,
    result,
  });
};

module.exports = addNotice;
/*
const addNotice = async (req, res, next) => {
  const { _id } = req.user;
  const { petAvatar } = req.body;

  let result;

  if (!petAvatar) {
    result = await Notice.create({
      ...req.body,
      author: _id,
    });
  } else {
    const avatar = await makeImgUrl(petAvatar, 'petAvatars', 300, 300);

    result = await Notice.create({
      ...req.body,
      author: _id,
      petAvatar: avatar,
    });
  }

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};
*/
