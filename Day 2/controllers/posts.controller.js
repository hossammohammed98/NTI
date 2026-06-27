const fs = require("fs");

const getData = () => {
  return JSON.parse(fs.readFileSync("./db.json", "utf8"));
};

const saveData = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
};

// GET all posts
const getPosts = (req, res) => {
  const data = getData();
  res.json(data.posts);
};

// GET post by id
const getPostById = (req, res) => {
  const data = getData();
  const id = Number(req.params.id);

  const post = data.posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

// CREATE post
const createPost = (req, res) => {
  const data = getData();

  const newPost = {
    id: Date.now(),
    ...req.body,
  };

  data.posts.push(newPost);
  saveData(data);

  res.status(201).json(newPost);
};

// PUT (full update safe)
const updatePost = (req, res) => {
  const data = getData();
  const id = Number(req.params.id);

  const post = data.posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.title = req.body.title ?? post.title;
  post.content = req.body.content ?? post.content;

  saveData(data);

  res.json(post);
};

// PATCH 
const patchPost = (req, res) => {
  const data = getData();
  const id = Number(req.params.id);

  const post = data.posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  Object.assign(post, req.body);

  saveData(data);

  res.json(post);
};

// DELETE
const deletePost = (req, res) => {
  const data = getData();
  const id = Number(req.params.id);

  const exists = data.posts.some((p) => p.id === id);

  if (!exists) {
    return res.status(404).json({ message: "Post not found" });
  }

  data.posts = data.posts.filter((p) => p.id !== id);

  saveData(data);

  res.json({ message: "Post deleted successfully" });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost,
};
