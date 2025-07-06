const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const connectDB = require("./config/db");

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

const allowedOrigins = [
  "https://frontend-staging-nl3f.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

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

// // ✅ Serve frontend build (from root-level build/)
// app.use(express.static(path.join(__dirname, "../build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../build", "index.html"));
// });

app.get("/api", (req, res) => {
  res.send("✅ API is running successfully on Render!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
