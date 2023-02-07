const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updateUser = require("./updateUser");
// const currentUser = require("./currentUser");
const checkEmail = require("./checkEmail");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  updateUser: ctrlWrapper(updateUser),
  checkEmail: ctrlWrapper(checkEmail),
  // currentUser: ctrlWrapper(currentUser),
};
