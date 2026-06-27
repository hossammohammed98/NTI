const userrepository = require("../repositories/user.repositery");

async function getalluser() {
  return await userrepository.findAll();

  //logic
}

async function getuserbyid(id) {
  return await userrepository.findbyid(id);
}

module.exports = { getalluser, getuserbyid };
