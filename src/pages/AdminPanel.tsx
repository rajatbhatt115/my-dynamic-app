import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // ✅ No renaming
import Sidemenu from "../components/Sidemenu";

const AdminPanel: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidemenu visible={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div
        className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        {/* Topbar */}
        <div className="bg-white shadow-md p-4 flex items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-4">
            <FaBars className="text-2xl" />
          </button>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
