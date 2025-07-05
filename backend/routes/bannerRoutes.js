const express = require("express");
const router = express.Router();
const { getBanner, updateBanner } = require("../controllers/bannerController");

router.get("/", getBanner);
router.put("/", updateBanner);

module.exports = router;
