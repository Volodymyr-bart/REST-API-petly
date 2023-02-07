const addNotice = require('./addNotice');
const deleteNotice = require('./deleteNotice');
const getNoticeById = require('./getNoticeById');
const getNoticesByCategory = require('./getNoticesByCategory');
const addToFavorite = require('./addToFavorite');
const removeFromFavorite = require('./removeFromFavorite');
const getMyAdsCategory = require('./getMyAdsCategory');
const getMyFavoriteAdsCategory = require('./getMyFavoriteAdsCategory');

module.exports = {
  addNotice,
  deleteNotice,
  getNoticeById,
  getNoticesByCategory,
  addToFavorite,
  removeFromFavorite,
  getMyAdsCategory,
  getMyFavoriteAdsCategory,
};
