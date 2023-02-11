const { UserPet } = require("../../models");

const getCurrent = async (req, res) => {
  const { email, name, address, phone, _id } = req.user;

  const userPetsList = await UserPet.find({
    owner: _id,
  });

  res.json({
    email,
    name,
    address,
    phone,
    userPetsList,
  });
};

module.exports = getCurrent;
