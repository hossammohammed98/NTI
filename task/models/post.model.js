const mongoose = require("mongoose");
const commentsSchema = require("./comments.model");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: {
    type: String,
    required: [true, "Post Title is required"],
    maxlength: [15, "maximum length of character is 15 chars"],
    minlength: [3, "minimum length of character is 3 chars"],
  },
  body: {
    type: String,
    required: [true, "you must enter content"],
    minlength: [10, "minimum length of character is 10 chars"],
  },
  comments: [commentsSchema],
});

module.exports = mongoose.model("Post", postSchema);
