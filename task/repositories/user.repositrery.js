const User = require("../models/user.model");

async function findUsers() {
  return await User.find();
}

async function findUserById(id) {
  return await User.findById(id);
}

async function findUserByName(name) {
  const userName = await User.find({
    name,
  });

  return userName;
}

async function updateUser(id, body) {
  return await User.findByIdAndUpdate(id, body, {
    new: true,
  });
}

async function assignNewUser(user) {
  const newUser = new User(user);
  return await newUser.save();
}

module.exports = {
  findUsers,
  findUserById,
  findUserByName,
  updateUser,
  assignNewUser,
};
