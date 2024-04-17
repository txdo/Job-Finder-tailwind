const User = require("../models/User");
const { validateRegister } = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  if (req.user)
    return res.status(400).send({ errors: ["User already logged in"] });

  const { name, username, password, confirmPassword } = req.body;

  const errors = validateRegister(name, username, password, confirmPassword);

  if (errors.length > 0) return res.status(400).send({ errors });

  const user = await User.findOne({ username });

  if (user)
    return res.status(409).send({ errors: ["Username already exists"] });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        _id: newUser._id,
        name: newUser.name,
      },
      process.env.JWT_KEY
    );

    res
      .status(201)
      .cookie("accessToken", accessToken)
      .send({ message: "User created successfully" });
  } catch (err) {
    res.status(400).send({ errors: [err.message] });
  }
};

exports.login = async (req, res) => {
  if (req.user)
    return res.status(400).send({ errors: ["User already logged in"] });

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(400).send({ errors: ["User does not exist"] });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect)
    return res.status(400).send({ errors: ["Incorrect password"] });

  const accessToken = jwt.sign(
    {
      _id: user._id,
      name: user.name,
    },
    process.env.JWT_KEY
  );

  res
    .status(200)
    .cookie("accessToken", accessToken)
    .send({ message: "User logged in successfully" });
};

exports.isLoggedIn = (req, res) => {
  if (!req.user) return res.status(401).send({ isLoggedIn: false });
  res.status(200).send({ isLoggedIn: true });
};

exports.logout = (req, res) => {
  if (!req.user)
    return res.status(400).send({ errors: ["User not logged in"] });
  res.status(200).clearCookie("accessToken").send({ message: "Logged out" });
};
