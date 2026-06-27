const postRepo = require("../repositories/post.repositery");

async function getAllPosts() {
  return await postRepo.findPosts();
}

async function getPostById(id) {
  return await postRepo.findPostById(id);
}

async function createNewPost(postData) {
  return await postRepo.createPost(postData);
}

async function updateCurrentPost(id, body) {
  return await postRepo.updatePost(id, body);
}

async function patchCurrentPost(id, body) {
  return await postRepo.patchPost(id, body);
}

async function deletePost(id) {
  return await postRepo.removePost(id);
}

async function addCommentToPost(id, comment) {
  return await postRepo.addComment(id, comment);
}

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updateCurrentPost,
  patchCurrentPost,
  deletePost,
  addCommentToPost,
};
