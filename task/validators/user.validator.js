const Joi = require("joi");

const userValidation = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.min": "name must be at least 3 chars",
    "any.required": "name is required",
    "string.empty": "name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "you must enter a valid email",
    "any.required": "email is required",
    "string.empty": "email is required",
  }),

  role: Joi.string().valid("dev", "user", "admin").default("user"),

  password: Joi.string().min(6).max(14).required().messages({
    "string.min": "password must be at least 6 characters",
    "string.max": "password must not exceed 14 characters",
    "any.required": "password is required",
    "string.empty": "password is required",
  }),

  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "passwords do not match",
    "any.required": "confirm password is required",
    "string.empty": "confirm password is required",
  }),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "you must enter a valid email",
    "any.required": "email is required",
    "string.empty": "email is required",
  }),

  password: Joi.string().min(6).max(14).required().messages({
    "string.min": "password must be at least 6 characters",
    "string.max": "password must not exceed 14 characters",
    "any.required": "password is required",
    "string.empty": "password is required",
  }),
});

module.exports = {
  userValidation,
  loginValidation,
};
