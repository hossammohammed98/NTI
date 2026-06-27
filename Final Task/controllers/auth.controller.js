const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========register=============//
exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    //check if exist before in db
    const userExists = await User.findOne({ username });
    if (userExists)
      return next({ status: 400, message: "username already taken" });
    //تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);
    //save new user
    const newUser = await User.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ message: "user registered successfully", userId: newUser._id });
  } catch (error) {
    next(err);
  }
};

// ==========login=============//
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user)
      return next({ status: 400, message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return next({ status: 400, message: "Invalid username or password" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    next(err);
  }
};
