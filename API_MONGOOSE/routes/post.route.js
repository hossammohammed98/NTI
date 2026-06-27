const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

// GET all posts
router.get("/", postController.getAllPosts);

// GET post by id
router.get("/:id", postController.getPostById);

// CREATE post
router.post("/", postController.createPost);

// UPDATE post (PUT)
router.put("/:id", postController.updatePost);

// PARTIAL UPDATE (PATCH)
router.patch("/:id", postController.partialUpdatePost);

// DELETE post
router.delete("/:id", postController.deletePost);

module.exports = router;
