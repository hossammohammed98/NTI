const userRepo = require("../repositories/user.repositrery");

async function getAllUsers() {
  return await userRepo.findUsers();
}

async function getUserById(id) {
  return await userRepo.findUserById(id);
}

async function getUserByName(name) {
  return await userRepo.findUserByName(name);
}

async function updateUser(id, body) {
  return await userRepo.updateUser(id, body);
}

async function createNewUser(user) {
  return await userRepo.assignNewUser(user);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  updateUser,
  createNewUser,
};
