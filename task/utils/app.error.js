// class AppError extends Error {
//   constructor(message, status) {
//     super(message);
//     this.status = status;
//   }
// }

// module.exports = AppError;

module.exports = (message, status) => {
  const err = new Error(message);
  err.status = status;
  return err;
};
