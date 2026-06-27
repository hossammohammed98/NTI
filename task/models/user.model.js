const mongoose = require("mongoose");
const { applyTimestamps } = require("./post.model");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: [3, "name must be at least 3 characters"],
    },
    email: {
      type: String,
      unique: [true, "email is existed already!"],
      required: [true, "email is  required."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "invaild email!",
      ],
    },
    role: { type: String, required: true, enum: ["dev", "user", "admin"] },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [3, "password must at least 3 characters"],
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.passwordCompare = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
