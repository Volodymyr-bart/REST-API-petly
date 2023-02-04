const bcrypt = require("bcrypt");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

// const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(
      409,
      "Користувач з такою електронною адресою вже зареєстрований у системі"
    );
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    address: newUser.address,
    phone: newUser.phone,
  });
};

module.exports = register;
