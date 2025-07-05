import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

// Admin Components
import AdminDashboard from "./components/Admin/AdminDashboard";
import BannerAdmin from "./components/Admin/BannerAdmin";
import AboutAdmin from "./components/Admin/AboutAdmin";
import TeamAdmin from "./components/Admin/TeamAdmin";
import FAQAdmin from "./components/Admin/FAQAdmin";
import AboutpageAboutAdmin from "./components/Admin/AboutpageAboutAdmin";
import AboutpageBannerAdmin from "./components/Admin/AboutpageBannerAdmin";
import ContactBannerAdmin from "./components/Admin/ContactBannerAdmin";
import ContactMessagesAdmin from "./components/Admin/ContactMessagesAdmin";

// Common Components
import Navbar from "./components/Navbar";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

const App: React.FC = () => {
  const location = useLocation();

  // Hide Navbar for any route that starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {/* Show Navbar only for non-admin routes */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Panel */}
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <AdminPanel />
            </AdminProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="banner" element={<BannerAdmin />} />
          <Route path="about" element={<AboutAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="faqs" element={<FAQAdmin />} />
          <Route path="aboutpageabout" element={<AboutpageAboutAdmin />} />
          <Route path="aboutpagebanner" element={<AboutpageBannerAdmin />} />
          <Route path="contactbanner" element={<ContactBannerAdmin />} />
          <Route path="contactmessages" element={<ContactMessagesAdmin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
