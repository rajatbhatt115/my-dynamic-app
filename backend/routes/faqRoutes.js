const express = require("express");
const router = express.Router();
const { getFAQs, addFAQ, updateFAQ, deleteFAQ } = require("../controllers/faqController");

router.get("/", getFAQs);
router.post("/", addFAQ);
router.put("/:id", updateFAQ);
router.delete("/:id", deleteFAQ);

module.exports = router;
