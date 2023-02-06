const { UserPet } = require('../../models');

const addUserPet = async (req, res, next) => {
  const { _id } = req.user;
  const result = await UserPet.create({ ...req.body, owner: _id });

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = addUserPet;
