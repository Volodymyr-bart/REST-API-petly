const { Service } = require("../../models");

const getServices = async (req, res) => {
  const result = await Service.find({});
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = getServices;
