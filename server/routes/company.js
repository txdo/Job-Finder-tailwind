const express = require("express");
const { authToken } = require("../middleware/authToken");
const { getCompanyInfo } = require("../controllers/company");
const router = express.Router();

router.get("/getCompanyInfo", authToken, getCompanyInfo);

module.exports = router;
