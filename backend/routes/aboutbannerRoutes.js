const express = require("express");
const router = express.Router();

// ✅ Yahi sahi controller function name hai:
const { getAboutBanner, updateAboutBanner } = require("../controllers/AboutBannerController");

// ✅ Correct route
router.get("/", getAboutBanner);
router.put("/", updateAboutBanner);

module.exports = router;

