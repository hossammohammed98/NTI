const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.get("/:id", getPostById);

router.post("/", createPost);

router.put("/:id", updatePost);

router.patch("/:id", patchPost);

router.delete("/:id", deletePost);

module.exports = router;
