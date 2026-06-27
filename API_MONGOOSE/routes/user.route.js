const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// GET all users
router.get("/", userController.getAllUsers);

// GET user by id
router.get("/:id", userController.getUserById);

// CREATE user
router.post("/", userController.createUser);

// UPDATE user (PUT)
router.put("/:id", userController.updateUser);

// PARTIAL UPDATE (PATCH)
router.patch("/:id", userController.partialUpdateUser);

// DELETE user
router.delete("/:id", userController.deleteUser);

module.exports = router;