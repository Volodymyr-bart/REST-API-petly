const { Notice } = require('../../models');
const { cloudinary } = require('../../helpers');

const addNotice = async (req, res, next) => {
  const { _id } = req.user;
  const { image } = req.body;

  const avatar = await cloudinary.uploader.upload(image, {
    folder: 'petAvatars',
  });
  const result = await Notice.create({ ...req.body, author: _id });

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = addNotice;
