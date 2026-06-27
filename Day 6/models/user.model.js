const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the schema for the User model
const userSchema = new mongoose.Schema(
  {
    // User's display name — required field
    name: { type: String, required: [true, "name is require"] },

    email: {
      type: String,
      required: [true, "email is require"],
      // Ensures no two users share the same email
      unique: [true, "email is exist"],
      // Regex validates standard email format (e.g. user@example.com)
      match: ["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"],
    },

    password: { type: String, required: [true, "password is require"] },

    confirmpassword: {
      type: String,
      required: [true, "confirm password is require"],
      // Excludes this field from query results by default for security
      select: false,
    },

    // Controls access level; defaults to "user" if not specified
    role: { type: String, enum: ["dev", "user", "admin"], default: "user" },
  },
  // Automatically adds createdAt and updatedAt fields
  { timestamps: true },
);

// Pre-save hook: runs automatically before every document.save() call
userSchema.pre("save", async function () {
  // "this" refers to the document being saved

  // Guard: abort save if passwords don't match
  if (this.password !== this.confirmpassword) {
    throw new Error("password and confirm password donot match");
  }

  // Hash the plain-text password with a salt round of 8 before storing
  this.password = await bcrypt.hash(this.password, 8);

  // Remove confirmPassword from the document — no need to persist it
  this.confirmpassword = undefined;
});

// Instance method: compares a candidate password against the stored hash
// Usage: await user.comparepassword(plainTextPassword)
userSchema.methods.comparepassword = async function (password) {
  // bcrypt.compare(plain, hash) — plain comes first, hash comes second
  return await bcrypt.compare(password, this.password);
};

// Export User Model
module.exports = mongoose.model("User", userSchema);
