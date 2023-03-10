const { HttpError } = require('../../helpers');
const { Notice } = require('../../models');
const { User } = require('../../models/user');

const getNoticeById = async (req, res, next) => {
  const { noticeId } = req.params;

  const notice = await Notice.findById(noticeId);
  if (!notice) {
    const error = HttpError(404);
    throw error;
  }

  const {
    category,
    title,
    name,
    birthday,
    breed,
    theSex,
    location,
    price,
    petAvatar,
    comments,
    author,
  } = notice;

  const authorData = await User.findById(author);

  let authorContacts = null;
  if (authorData) {
    authorContacts = { email: authorData.email, phone: authorData.phone };
  }

  const result = await {
    category,
    title,
    name,
    birthday,
    breed,
    theSex,
    location,
    price,
    petAvatar,
    comments,
    author: authorContacts,
  };

  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = getNoticeById;
