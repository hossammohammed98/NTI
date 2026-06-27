const joi = require('joi');

const registerSchema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().min(6).required()  
});

const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});

module.exports = { registerSchema, loginSchema };