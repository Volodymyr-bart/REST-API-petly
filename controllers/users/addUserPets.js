const { UserPet } = require('../../models');
const { makeImgUrl } = require('../../helpers');

const addUserPet = async (req, res, next) => {
  const { _id } = req.user;
  const { photo } = req.body;

  if (photo) {
    req.body.petPhoto = await makeImgUrl(photo, 'petsPhotos', 320, 320);
  }

  const result = await UserPet.create({ ...req.body, owner: _id });

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = addUserPet;
/*
const addUserPet = async (req, res, next) => {
  const { _id } = req.user;
  const { photo } = req.body;

  let result;

  if (!photo) {
    result = await UserPet.create({ ...req.body, owner: _id });
  } else {
    const petPhoto = await makeImgUrl(photo, 'petsPhotos', 320, 320);

    result = await UserPet.create({ ...req.body, owner: _id, photo: petPhoto });
  }

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};
*/
