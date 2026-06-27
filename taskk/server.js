const express = require("express");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const errorHandler = require("./middleware/error");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Taskk API listening on http://localhost:${port}`);
});
