const Joi = require("joi");

const postValidator = Joi.object({
  title: Joi.string().min(3).max(10).required().messages({
    "string.min": "title must be at least 3 chars",
    "string.max": "title must be no longer than 10 chars",
    "any.required": "title is required",
    "string.empty": "title is required",
  }),

  body: Joi.string().min(10).required().messages({
    "string.min": "body must be at least 10 chars",
    "any.required": "you must enter content",
    "string.empty": "you must enter content",
  }),
});

module.exports = postValidator;
