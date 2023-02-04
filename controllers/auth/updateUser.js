const { User } = require("../../models/user");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  });

  if (!user) res.status(404);

  res.status(200).json({ _id, success: true, data: user });
};

module.exports = updateUser;
