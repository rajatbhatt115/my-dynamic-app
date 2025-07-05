const express = require("express");
const router = express.Router();
const { getAboutpageAbout, updateAboutpageAbout } = require("../controllers/aboutpageaboutController");

router.get("/", getAboutpageAbout);
router.put("/", updateAboutpageAbout);

module.exports = router;
