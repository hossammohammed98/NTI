const User = require("../models/user.model");

async function findAll() {
  return await User.find();
}

async function findbyid(id) {
  return await User.findById(id);
}
module.exports = { findAll, findbyid };
