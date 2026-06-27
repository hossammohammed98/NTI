const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");

const server = express();
const port = 3000;

// Middleware
server.use(express.json());

// Routes
server.use("/api/users", userRoute);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mansoura")
  .then(() => {
    console.log("Database Connected ✔");

    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error ", err);
  });
