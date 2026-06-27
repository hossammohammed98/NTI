const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next({
      status: 401,
      message: "Authorization header missing or malformed",
    });
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET || "your_jwt_secret";

  try {
    const payload = jwt.verify(token, secret);
    req.user = { id: payload.id, username: payload.username };
    next();
  } catch (err) {
    next({ status: 401, message: "Invalid or expired token" });
  }
};
