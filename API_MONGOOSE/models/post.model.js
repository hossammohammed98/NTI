const mongoose = require("mongoose");
const commentschema = require("./comments.model");
const postschema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true, maxlength: 10 },
  body: { type: String, required: true },
  comments: [commentschema],
});

module.exports = mongoose.model("Post", postschema);
