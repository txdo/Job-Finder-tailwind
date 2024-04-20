const express = require("express");
const {
  register,
  login,
  isLoggedIn,
  logout,
  registerCompany,
  loginCompany,
} = require("../controllers/auth");
const { authToken } = require("../middleware/authToken");
const router = express.Router();
const upload = require("../config/multer");

router.post("/register", authToken, register);
router.post(
  "/registerCompany",
  authToken,
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  registerCompany
);
router.post("/login", authToken, login);
router.post("/loginCompany", authToken, loginCompany);
router.get("/isLoggedIn", authToken, isLoggedIn);
router.get("/logout", authToken, logout);

module.exports = router;
