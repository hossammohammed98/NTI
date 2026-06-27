const express = require("express");
const app = express();

const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route");

// middleware
app.use(express.json());

// routes
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// server start
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
