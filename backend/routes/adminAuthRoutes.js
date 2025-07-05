// ✅ Express Router use kar rahe hain
const express = require("express");
const router = express.Router();

// ✅ Controller import
const { loginAdmin } = require("../controllers/adminController");

// ✅ Login route (POST request handle karega)
router.post("/login", loginAdmin);

// ✅ Export router
module.exports = router;