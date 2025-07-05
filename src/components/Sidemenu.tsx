import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

interface SidemenuProps {
  visible: boolean;
  onClose: () => void;
}

const menuItems = [
  // { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Home Banner", path: "/admin/banner" },
  { label: "Home About", path: "/admin/about" },
  { label: "Team", path: "/admin/team" },
  { label: "FAQs", path: "/admin/faqs" },
  { label: "About Page About", path: "/admin/aboutpageabout" },
  { label: "About Page Banner", path: "/admin/aboutpagebanner" },
  { label: "Contact Banner", path: "/admin/contactbanner" },
  { label: "Contact Messages", path: "/admin/contactmessages" },
];

const Sidemenu: React.FC<SidemenuProps> = ({ visible, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md w-64 z-50 transform transition-transform duration-300 ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        {/* <FaTimes onClick={onClose} className="cursor-pointer text-xl" /> */}
      </div>

      <nav className="flex flex-col gap-1 mt-4 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`py-2 px-3 rounded hover:bg-gray-200 ${
              location.pathname === item.path ? "bg-blue-100 font-medium" : ""
            }`}
            //  Removed: onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidemenu;
