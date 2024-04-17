const express = require("express");
const { register, login, isLoggedIn, logout } = require("../controllers/auth");
const { authToken } = require("../middleware/authToken");
const router = express.Router();

router.post("/register", authToken, register);
router.post("/login", authToken, login);
router.get("/isLoggedIn", authToken, isLoggedIn);
router.get("/logout", authToken, logout);

module.exports = router;
