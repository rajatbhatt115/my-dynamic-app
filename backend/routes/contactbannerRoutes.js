const express = require("express");
const router = express.Router();

// ✅ Yahi sahi controller function name hai:
const { getContactBanner, updateContactBanner } = require("../controllers/contactBannerController");

// ✅ Correct route
router.get("/", getContactBanner);
router.put("/", updateContactBanner);

module.exports = router;
