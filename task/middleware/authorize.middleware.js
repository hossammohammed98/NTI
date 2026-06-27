const Post = require("../models/post.model");

const auth = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);
    console.log(post);
    console.log(postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const user = req.user;

    if (post.userId.toString() !== user.id) {
      return res.status(403).json({
        message: "You are not allowed to delete this post",
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = auth;
