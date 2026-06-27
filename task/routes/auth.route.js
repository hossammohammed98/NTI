const authController = require("../controllers/Auth.controller");
const express = require("express");
const router = express.Router();
const validMiddleWare = require("../middleware/joi.middleware");
const {
  userValidation,
  loginValidation,
} = require("../validators/user.validator");

router.post(
  "/register",
  validMiddleWare(userValidation),
  authController.register,
);
router.post("/login", validMiddleWare(loginValidation), authController.login);

module.exports = router;
