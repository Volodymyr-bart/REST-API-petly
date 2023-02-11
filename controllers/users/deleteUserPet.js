const { HttpError } = require("../../helpers");
const { UserPet } = require("../../models");

const deleteUserPet = async (req, res, next) => {
  const { petId } = req.params;

  const result = await UserPet.findByIdAndRemove(petId);

  if (!result) {
    throw HttpError(404, "Notice not found");
  }

  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = deleteUserPet;
