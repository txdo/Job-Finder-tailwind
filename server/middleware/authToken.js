const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return next();
  }

  try {
    const user = jwt.verify(token, process.env.JWT_KEY);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.clearCookie("accessToken");
    next();
  }
};
