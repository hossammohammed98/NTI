const User = require("../models/user.model");
const Post = require("../models/post.model");
const AppError = require("../utils/app.error");

const generateToken = require("../utils/tokenCreate");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    const token = generateToken({
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      id: newUser._id,
    });

    res.status(201).json({
      message: "user has been created successfully",
      user: newUser,
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return next(AppError("invalid email or password", 400));
    }

    const isPasswordMatch = await user.passwordCompare(password);

    if (!isPasswordMatch) {
      return next(AppError("password doesn't match", 400));
    }

    const token = generateToken({
      name: user.name,
      email: user.email,
      role: user.role,
      id: user._id,
    });

    res.status(200).json({ message: "login done", user, token });
  } catch (err) {
    next(err);
  }
};

// exports.delete = async (req, res) => {
//   const { id } = req.params;
//   const deletePost = post.findById(id);
//   const token = {
//     userId: deletePost.id,
//   };
//   res.status(200).json({ message: "delete Post successfully", deletePost });
// };
