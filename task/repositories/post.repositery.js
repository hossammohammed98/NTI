const Post = require("../models/post.model");

async function findPosts() {
  return await Post.find().populate("userId");
}

async function findPostById(id) {
  return await Post.findById(id);
}

async function createPost(postData) {
  const newPost = new Post(postData);
  return await newPost.save();
}

async function updatePost(id, body) {
  return await Post.findByIdAndUpdate(id, body, {
    new: true,
  });
}

async function patchPost(id, body) {
  return await Post.findByIdAndUpdate(
    id,
    { $set: body },
    {
      new: true,
      runValidators: true,
    },
  );
}

async function removePost(id) {
  return await Post.findByIdAndDelete(id);
}

async function addComment(id, comment) {
  const post = await Post.findById(id);

  post.comments.push(comment);

  return await post.save();
}

module.exports = {
  findPosts,
  findPostById,
  createPost,
  updatePost,
  patchPost,
  removePost,
  addComment,
};
