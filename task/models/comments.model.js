const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: {
    type: String,
    required: [true, "you must enter a comment"],
    minlength: [10, "minimum length of character is 10 chars"],
  },
});

module.exports = commentsSchema;
