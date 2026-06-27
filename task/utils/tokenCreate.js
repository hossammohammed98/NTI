const jwt = require("jsonwebtoken");

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.secret_key, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
