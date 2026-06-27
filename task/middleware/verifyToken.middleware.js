const jwt = require("jsonwebtoken");
const AppError = require("../utils/app.error");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      // return res.status(401).json({ message: "No token provided" });
      return next(new AppError("No token provided", 400));
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.secret_key);

    req.user = payload;

    return next();
  } catch (err) {
    // return res.status(401).json({ message: "Invalid token" });
    return next(new AppError("Invalid token", 401));
  }
};
