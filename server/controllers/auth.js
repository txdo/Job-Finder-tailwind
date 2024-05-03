const Company = require("../models/Company");
const User = require("../models/User");
const { validateRegister, validateCompany } = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { stringToArray } = require("../utils/helper");
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

exports.registerCompany = async (req, res) => {
  if (req.user)
    return res.status(400).send({ errors: ["Company already logged in"] });

  const {
    name,
    field,
    location,
    description,
    url,
    username,
    password,
    confirmPassword,
  } = req.body;

  let { reasons } = req.body;

  const banner = req.files.banner;
  const image = req.files.image;

  reasons = stringToArray(reasons);

  const errors = validateCompany(
    name,
    description,
    reasons,
    url,
    username,
    password,
    confirmPassword,
    banner,
    image
  );

  if (errors.length > 0) {
    fs.unlink(banner[0].path, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    fs.unlink(image[0].path, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    return res.status(400).send({ errors });
  }

  const company = await Company.findOne({ username });

  if (company)
    return res.status(409).send({ errors: ["Username already exists"] });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newCompany = await Company.create({
      name,
      field,
      location,
      description,
      reasons,
      url,
      banner: banner[0].filename,
      image: image[0].filename,
      username,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        _id: newCompany._id,
        name: newCompany.name,
        company: true,
      },
      process.env.JWT_KEY
    );

    res
      .status(201)
      .cookie("accessToken", accessToken)
      .send({ message: "Company created successfully" });
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

exports.loginCompany = async (req, res) => {
  if (req.user)
    return res.status(400).send({ errors: ["Company already logged in"] });

  const { username, password } = req.body;

  const company = await Company.findOne({ username });

  if (!company)
    return res.status(400).send({ errors: ["Company does not exist"] });

  const isPasswordCorrect = await bcrypt.compare(password, company.password);

  if (!isPasswordCorrect)
    return res.status(400).send({ errors: ["Incorrect password"] });

  const accessToken = jwt.sign(
    {
      _id: company._id,
      name: company.name,
      company: true,
    },
    process.env.JWT_KEY
  );

  res.status(200).cookie("accessToken", accessToken).send({
    message: "Company logged in successfully",
  });
};

exports.isLoggedIn = (req, res) => {
  if (!req.user) return res.status(401).send({ isLoggedIn: false });
  if (!req.user.company) return res.status(200).send({ isLoggedIn: "user" });
  res.status(200).send({ isLoggedIn: "company" });
};

exports.logout = (req, res) => {
  if (!req.user)
    return res.status(400).send({ errors: ["User not logged in"] });
  res.status(200).clearCookie("accessToken").send({ message: "Logged out" });
};
