const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const {
  validateBody,
  authenticateToken,
} = require("../middlewares/auth.middleware");
const { postSchema } = require("../validation/post.validation");

router.post(
  "/",
  authenticateToken,
  validateBody(postSchema),
  postController.createPost,
);
router.get("/", postController.getAllPosts);
router.delete("/:id", authenticateToken, postController.deletePost);

module.exports = router;
