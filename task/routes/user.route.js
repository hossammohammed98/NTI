const express = require("express");
const router = express.Router();
const userRouterMiddleWarr = require("../middleware/userRouter.middleware");

const userNameMiddleWare = require("../middleware/userName.middleware");
const userValidation = require("../validators/user.validator");
const validMiddleWare = require("../middleware/joi.middleware");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  getUsersByName,
  updateUser,
} = require("../controllers/user.controller");

router.use(userRouterMiddleWarr);

router.get("/", getAllUsers);

router.get("/getUser/:id", getUserById);

router.post(
  "/",
  validMiddleWare(userValidation),
  userNameMiddleWare,
  createNewUser,
);

router.put("/:id", updateUser);
router.get("/search", getUsersByName);

module.exports = router;
