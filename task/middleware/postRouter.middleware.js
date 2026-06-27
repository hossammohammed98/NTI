const PostRouterMiddleWarr = (req, res, next) => {
  console.log(`you are in : posts${req.url} router`);
  next();
};

module.exports = PostRouterMiddleWarr;
