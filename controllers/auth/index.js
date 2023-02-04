const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updateUser = require("./updateUser");
const currentUser = require("./currentUser");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  updateUser: ctrlWrapper(updateUser),
  currentUser: ctrlWrapper(currentUser),
};
