// ✅ JWT package import
const jwt = require("jsonwebtoken");

// ✅ Hardcoded credentials (aap yahan username/password fix kar rahe ho)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// ✅ Login controller function
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body; // frontend se aaya data

  try {
    // ✅ Check: username aur password match karte hain ya nahi
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // ✅ JWT token generate karo
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "2h" });

      // ✅ Token frontend ko bhej do
      return res.json({ token });
    } else {
      // ❌ Invalid credentials error
      return res.status(401).json({ message: "Galat username ya password" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
