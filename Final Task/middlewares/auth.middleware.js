const jwt = require("jsonwebtoken");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next({ status: 400, message: error.details[0].message });
    }
    next();
  };
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return next({
      status: 401,
      message: "Access token missing (أنت مش مسجل دخول)",
    });
  //check token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err)
      return next({
        status: 403,
        message: "Invalid or expired token",
      });
    req.user = decodedUser;
    next();
  });
};
module.exports = { validateBody, authenticateToken };
