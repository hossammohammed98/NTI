const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().trim().min(3).max(120).required(),
  body: Joi.string().trim().min(1).required(),
});

module.exports = {
  postSchema,
};
