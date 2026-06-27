const postService = require("../services/post.service");

async function getAllPosts(req, res, next) {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({
      data: posts,
      length: posts.length,
    });
  } catch (err) {
    next(err);
  }
}

async function getPostById(req, res, next) {
  try {
    const post = await postService.getPostById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
}

async function createNewPost(req, res, next) {
  try {
    const newPost = await postService.createNewPost(req.body);

    res.status(201).json({
      message: "Post Added Successfully",
      data: newPost,
    });
  } catch (err) {
    next(err);
  }
}

async function updateCurrentPost(req, res, next) {
  try {
    const updatedPost = await postService.updateCurrentPost(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
}

async function patchPost(req, res, next) {
  try {
    const updatedPost = await postService.patchCurrentPost(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      message: "Post updated partially",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
}

async function addCommentToPost(req, res, next) {
  try {
    const updatedPost = await postService.addCommentToPost(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      message: "Comment added successfully",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
}

async function deletePost(req, res, next) {
  try {
    const deletedPost = await postService.deletePost(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
      data: deletedPost,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updateCurrentPost,
  patchPost,
  addCommentToPost,
  deletePost,
};
