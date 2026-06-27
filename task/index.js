const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

const appMiddleWare = require("./middleware/app.middleware");
const handleErrorMiddleWare = require("./middleware/erroHandleMiddleware");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const server = express();

mongoose
  .connect(process.env.local_mongo)
  .then(() => {
    console.log("connection is set up");
  })
  .catch((err) => {
    console.log(err);
  });

server.use(express.json());

const logsDir = path.join(__dirname, "logs");

const accessLogStream = fs.createWriteStream(path.join(logsDir, "access.log"), {
  flags: "a",
});

server.use(morgan("combined", { stream: accessLogStream }));

server.use(appMiddleWare);

server.use("/auth", authRouter);
server.use("/users", userRouter);
server.use("/posts", postRouter);

server.use(handleErrorMiddleWare);

server.listen(process.env.port, "127.0.0.1", () => {
  console.log("server created successfully");
});
