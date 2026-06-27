const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username must be at most 20 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscore",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      validate: {
        validator: function (value) {
          // على الأقل حرف + رقم
          return /^(?=.*[A-Za-z])(?=.*\d).+$/.test(value);
        },
        message: "Password must contain at least one letter and one number",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);