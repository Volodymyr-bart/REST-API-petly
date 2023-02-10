const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const checkEmail = require("./checkEmail");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  checkEmail: ctrlWrapper(checkEmail),
};
