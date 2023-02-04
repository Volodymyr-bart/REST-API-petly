const { Service } = require("../../models");

const getServices = async (req, res) => {
  const result = await Service.find({});
  res.json(result);
};

module.exports = getServices;
