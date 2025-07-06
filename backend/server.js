const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

// Import routes
const bannerRoutes = require("./routes/bannerRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const teamRoutes = require("./routes/teamRoutes");
const faqRoutes = require("./routes/faqRoutes");
const AboutpageAboutRoutes = require("./routes/AboutpageAboutRoutes");
const aboutbannerRoutes = require("./routes/aboutbannerRoutes");
const contactbannerRoutes = require("./routes/contactbannerRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");

// Create Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/AboutpageAbout", AboutpageAboutRoutes);
app.use("/api/aboutbanner", aboutbannerRoutes);
app.use("/api/contactbanner", contactbannerRoutes);
app.use("/api/contact", contactRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running successfully on Render!");
});

// Start server with Render-compatible port binding
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
