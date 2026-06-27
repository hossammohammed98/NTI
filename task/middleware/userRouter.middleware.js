const userRouterMiddleWarr = (req, res, next) => {
  console.log(`you are in : users${req.url} router`);
  next();
};

module.exports = userRouterMiddleWarr;
