const { HttpError } = require("../../helpers");
const { Notice } = require("../../models");

const getNoticeById = async (req, res, next) => {
  const { noticeId } = req.params;

  const notice = await Notice.findById(noticeId);

  if (!notice) {
    const error = HttpError(404);
    throw error;
  }

  res.json({ status: "success", code: 200, notice });
};

module.exports = getNoticeById;
