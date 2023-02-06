const { HttpError } = require('../../helpers');
const { User } = require('../../models/user');

const checkEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(
      409,
      'Користувач з такою електронною адресою вже зареєстрований у системі'
    );
  }

  res.status(200).json(`OK, ${email} not used yet`);
};

module.exports = checkEmail;
