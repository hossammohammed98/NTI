const Joi = require("joi");

const commentValidation = Joi.object({
  text: Joi.string().min(10).required().messages({
    "string.min": "comment must be at least 10 chars",
    "any.required": "comment is required",
    "string.empty": "comment is required",
  }),
});

module.exports = commentValidation;
