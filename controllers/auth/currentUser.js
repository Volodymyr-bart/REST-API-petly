const getCurrent = async (req, res) => {
  const { email, name, address, phone } = req.user;

  res.json({
    email,
    name,
    address,
    phone,
  });
};
module.exports = getCurrent;
