const { UserPet } = require("../../models");

const getCurrent = async (req, res) => {
  const { email, name, address, phone, birthday, _id } = req.user;

  const userPetsList = await UserPet.find({
    owner: _id,
  });

  res.json({
    email,
    name,
    address,
    phone,
    birthday,
    userPetsList,
  });
};

module.exports = getCurrent;
