const userName = (req, res, next) => {
  console.log(`Post Request: user name ${req.body.name}`);
  next();
};

module.exports = userName;
