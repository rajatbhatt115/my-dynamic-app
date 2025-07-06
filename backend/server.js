// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // ✅ Needed for serving frontend build

dotenv.config();

const connectDB = require("./config/db");

// Route imports
const bannerRoutes = require("./routes/bannerRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const teamRoutes = require("./routes/teamRoutes");
const faqRoutes = require("./routes/faqRoutes");
const aboutpageAboutRoutes = require("./routes/aboutpageAboutRoutes");
const aboutbannerRoutes = require("./routes/aboutbannerRoutes");
const contactbannerRoutes = require("./routes/contactbannerRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");

const app = express();

// ✅ Setup CORS - allow only your frontend
const allowedOrigins = [
  "https://frontend-staging-nl3f.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ API routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/aboutpageabout", aboutpageAboutRoutes);   
app.use("/api/aboutbanner", aboutbannerRoutes);
app.use("/api/contactbanner", contactbannerRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Serve frontend static files (React build)
app.use(express.static(path.join(__dirname, "../frontend/build")));

// ✅ Catch-all route to serve index.html for React Router (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});

// ✅ Health check route (optional)
app.get("/api", (req, res) => {
  res.send("✅ API is running successfully on Render!");
});

// ✅ Start server (bind to environment port)
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
