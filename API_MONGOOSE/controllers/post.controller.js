    const Post = require("../models/post.model");

// GET all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userid", "name email");
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET post by id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("userid");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE post
const createPost = async (req, res) => {
  try {
    const { userid, title, body, comments } = req.body;

    const newPost = new Post({
      userid,
      title,
      body,
      comments: comments || [],
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE post (PUT)
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PARTIAL UPDATE (PATCH)
const partialUpdatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE post
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  partialUpdatePost,
  deletePost,
};