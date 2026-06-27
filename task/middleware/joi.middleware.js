const AppError = require("../utils/app.error");

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return next(AppError(error.details[0].message, 400));
    }
    req.body = value;
    next();
  };
}

module.exports = validate;
