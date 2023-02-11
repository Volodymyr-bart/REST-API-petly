const { HttpError } = require("../../helpers");
const { Notice } = require("../../models");

const deleteNotice = async (req, res, next) => {
  const { noticeId } = req.params;

  const result = await Notice.findByIdAndRemove(noticeId);

  if (!result) {
    throw HttpError(404, "Notice not found");
  }

  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = deleteNotice;
