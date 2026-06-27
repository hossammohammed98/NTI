const userService = require("../services/user.service");

// get all users
async function getAllUsers(req, res, next) {
  try {
    const allUsers = await userService.getAllUsers();

    res.status(200).json({
      message: "Success",
      data: allUsers,
    });
  } catch (err) {
    next(err);
  }
}

// get user by id
async function getUserById(req, res, next) {
  try {
    const id = req.params.id;
    const userById = await userService.getUserById(id);

    res.status(200).json(userById);
  } catch (err) {
    // console.log("error happend: ", err);
    next(err);
  }
}

// create user
async function createNewUser(req, res, next) {
  try {
    await userService.createNewUser(req.body);
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    next(err);
  }
}

async function getUsersByName(req, res, next) {
  try {
    const { name } = req.query;

    const users = await userService.getUserByName(name);

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

// update user

async function updateUser(req, res, next) {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);

    res.status(200).json({
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  getUsersByName,
};
