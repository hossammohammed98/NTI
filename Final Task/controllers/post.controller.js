const Post = require("../models/Post");

// [3] عمل بوست جديد
exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const newPost = await Post.create({
      title,
      content,
      author: req.user.id,
    });

    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};
//get posts
exports.getAllPosts = async (req, res, next) => {
  try {
    // populate بتخلي الـ mongoose يروح لجدول الـ Users ويجيب اسم الكاتب بدل ما يعرض مجرد ID ملوش معنى
    const posts = await Post.find().populate("author", "username");
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return next({ status: 404, message: "Post not found" });

    if (post.author.toString() !== req.user.id) {
      return next({
        status: 403,
        message: "You are not authorized to delete this post",
      });
    }

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    next(err);
  }
};
