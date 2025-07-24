// src/components/Layout.tsx
import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="relative z-50">
            <Sidebar />
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <button
          className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setSidebarOpen(true)}
        >
          Open Sidebar
        </button>
        {/* Route content will be injected here */}
        <div className="px-8 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
