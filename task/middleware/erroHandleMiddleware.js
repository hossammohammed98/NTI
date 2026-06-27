module.exports = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json({ failed: true, message });
};
