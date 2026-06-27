const Post = require("../models/post.model");

module.exports = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (post.userId.toString() !== req.user.id)
    return res.json({ message: "You not allowed to delete this post" });

  next();
};
