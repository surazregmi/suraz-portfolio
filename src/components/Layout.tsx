// src/components/Layout.tsx
import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Sidebar content with close icon */}
          <div className="relative z-50 bg-green-600 h-full w-72 shadow-lg text-white">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <Sidebar />
          </div>
          {/* Background overlay removed since we're using a close button */}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-4 overflow-y-auto text-[#4f4f4f]">
        <button
          className="md:hidden mb-4 px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
        {/* Route content will be injected here */}
        <div className="px-8 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
