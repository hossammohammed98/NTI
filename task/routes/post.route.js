const express = require("express");
const router = express.Router();
const PostRouterMiddleWare = require("../middleware/postRouter.middleware");
const getPostsMiddleWare = require("../middleware/getPosts.middleware");
const verfiyTokenMiddleWare = require("../middleware/verifyToken.middleware");
const verifyDeletePost = require("../middleware/authorize.middleware");
const postOwnerMiddleWare = require("../middleware/postOwner.middleware");

const {
  getAllPosts,
  getPostById,
  createNewPost,
  updateCurrentPost,
  patchPost,
  deletePost,
  addCommentToPost,
} = require("../controllers/post.controller");

router.use(PostRouterMiddleWare);

// router.get("/", getPostsMiddleWare, getAllPosts);
router.get("/", verfiyTokenMiddleWare, getAllPosts);
router.get("/:id", getPostById);

router.post("/addPost", createNewPost);
router.post("/addComment/:id", verfiyTokenMiddleWare, addCommentToPost);

router.put("/updatePost/:id", updateCurrentPost);

router.patch("/patchPost/:id", patchPost);

router.delete(
  "/deletePost/:id",
  verfiyTokenMiddleWare,
  postOwnerMiddleWare,
  verifyDeletePost,
  deletePost,
);

module.exports = router;
