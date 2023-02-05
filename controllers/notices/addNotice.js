const { Notice } = require('../../models/notices');

const addNotice = async (req, res, next) => {
  //   const { _id } = req.user;
  //   const result = await Notice.create({ ...req.body, owner: _id });
  const result = await Notice.create({ ...req.body });

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = addNotice;
