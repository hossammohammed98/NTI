const userservice = require("../services/user.service");

module.exports.getallusers = async (req, res, next) => {
  const users = await userservice.getalluser();
  res.json(users);
};
