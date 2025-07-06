// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load .env variables early
dotenv.config();

const connectDB = require("./config/db");

// Import route files
const bannerRoutes = require("./routes/bannerRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const teamRoutes = require("./routes/teamRoutes");
const faqRoutes = require("./routes/faqRoutes");
const AboutpageAboutRoutes = require("./routes/AboutpageAboutRoutes");
const aboutbannerRoutes = require("./routes/aboutbannerRoutes");
const contactbannerRoutes = require("./routes/contactbannerRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");

const app = express();

// ✅ Configure CORS for Render frontend
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "https://frontend-staging-nl3f.onrender.com",
  credentials: true
}));

// Middleware
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ API routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/AboutpageAbout", AboutpageAboutRoutes);
app.use("/api/aboutbanner", aboutbannerRoutes);
app.use("/api/contactbanner", contactbannerRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running successfully on Render!");
});

// ✅ Port binding for Render (must use process.env.PORT)
const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
