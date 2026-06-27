const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //tell mongoose to connect with link which stor in env
    console.log("MongoDb connected successfully");
  } catch (err) {
    console.error("DB connection failedL", err.message);
    process.exit(1); //close server immediately
  }
};

module.exports = connectDB;
