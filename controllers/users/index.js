const currentUser = require('./currentUser');
const addUserPet = require('./addUserPets');
const deleteUserPet = require('./deleteUserPet');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  currentUser: ctrlWrapper(currentUser),
  addUserPet: ctrlWrapper(addUserPet),
  deleteUserPet: ctrlWrapper(deleteUserPet),
};
