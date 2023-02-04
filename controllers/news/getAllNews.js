const { News } = require("../../models");

const getAllNews = async (req, res) => {
  const result = await News.find({});
  res.json(result);
};

module.exports = getAllNews;
