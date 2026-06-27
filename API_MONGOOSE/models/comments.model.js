const mongoose = require("mongoose");

const commentschema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
});

module.exports = commentschema;
