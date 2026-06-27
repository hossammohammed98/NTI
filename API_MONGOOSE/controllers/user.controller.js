const User = require("../models/user.model");

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "All users found",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: "Error getting users", err });
  }
};

// GET USER BY ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error getting user", err });
  }
};

// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", err });
  }
};

// UPDATE USER (PUT - full update)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", err });
  }
};

// PARTIAL UPDATE (PATCH)
exports.partialUpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User partially updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", err });
  }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", err });
  }
};