const post = require("../models/post.model");
const getPosts = async (req, res, next) => {
  const length = await post.countDocuments();
  req.length = length;
  console.log(`Get Request: all posts ${length}`);
  next();
};

module.exports = getPosts;
