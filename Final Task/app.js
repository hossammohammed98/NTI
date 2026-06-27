const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);

//shoud be at the end
app.use(errorHandler);

module.exports = app;
