const express = require("express");
const auth = require("../middleware/auth");
const { postSchema } = require("../validators/post");

const router = express.Router();

const posts = [];
let nextPostId = 1;

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", auth, (req, res, next) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.details[0].message });

  const newPost = {
    id: nextPostId++,
    authorId: req.user.id,
    title: value.title,
    body: value.body,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);

  res.status(201).json(newPost);
});

module.exports = router;
