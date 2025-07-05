const express = require("express");
const router = express.Router();
const { createMessage, getAllMessages } = require("../controllers/contactController");

router.post("/", createMessage); // for frontend contact form
router.get("/", getAllMessages); // for admin panel

module.exports = router;
