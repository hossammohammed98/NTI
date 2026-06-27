const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/DB")
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

//import the user model
const user = require("./models/user.modle");

//create a new user
// const newUser = new user({
//   name: "hossam",
//   email: "hossam@gmail.com",
//   password: "123456",
// });
//save the user to the database
// newUser.save();

//find all users in the database
async function findusers() {
//   const users = await user.find();
//   console.log(users);
//find one user by id
//   const updatedUser = await user.findByIdAndUpdate("6a1fe002045b2bf4e7d29a8f", {
//     name: "mayada",
//   });
// }
//find one user by password
// const exitUser = await user.findOne({ password: "123456" });
// console.log(exitUser);

// }
const notexit = await user.findByIdAndDelete("6a1fe002045b2bf4e7d29a8f");       
console.log(notexit);
}
findusers();
