const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require("../validators/auth");

const router = express.Router();

const users = [];
let nextUserId = 1;

const createToken = (user) => {
  const secret = process.env.JWT_SECRET || "your_jwt_secret";
  return jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: "1h",
  });
};

router.post("/register", async (req, res, next) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) return next({ status: 400, message: error.details[0].message });

    const existing = users.find((user) => user.username === value.username);
    if (existing)
      return next({ status: 409, message: "Username already exists" });

    const passwordHash = await bcrypt.hash(value.password, 10);
    const newUser = {
      id: nextUserId++,
      username: value.username,
      passwordHash,
    };

    users.push(newUser);

    res.status(201).json({ id: newUser.id, username: newUser.username });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return next({ status: 400, message: error.details[0].message });

    const user = users.find((item) => item.username === value.username);
    if (!user)
      return next({ status: 401, message: "Invalid username or password" });

    const validPassword = await bcrypt.compare(
      value.password,
      user.passwordHash,
    );
    if (!validPassword)
      return next({ status: 401, message: "Invalid username or password" });

    const token = createToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
