//import mongoose
const mongoose = require("mongoose");

//define the schema for the user model
const userschema = new mongoose.Schema({
  //define the fields for the user model
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
});

//define the model
module.exports = mongoose.model("User", userschema);
