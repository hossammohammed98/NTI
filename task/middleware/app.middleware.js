const appMiddleWare = (req, res, next) => {
  console.log(`request method: ${req.method}`);
  console.log(`request url: ${req.url}`);
  next();
};

module.exports = appMiddleWare;
