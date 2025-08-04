import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-dark bg-opacity-80 backdrop-blur-md fixed w-full z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Suraj Regmi
        </div>
        <div className="hidden md:flex space-x-6 uppercase text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="cursor-pointer hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

// import Sidebar from "@/components/ui/Sidebar";
// import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar for large screens */}
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       {sidebarOpen && (
//         <div className="md:hidden fixed inset-0 z-40 flex">
//           {/* Sidebar content with close icon */}
//           <div className="relative z-50 bg-green-600 h-full w-72 shadow-lg text-white">
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="text-white text-2xl"
//               >
//                 <FaTimes />
//               </button>
//             </div>
//             <Sidebar />
//           </div>
//           {/* Background overlay removed since we're using a close button */}
//         </div>
//       )}

//       {/* Main Content Area */}
//       <div className="flex-1 bg-white p-4 overflow-y-auto text-[#4f4f4f]">
//         <button
//           className="md:hidden mb-4 px-4 py-2 bg-green-600 text-white rounded"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <FaBars />
//         </button>
//         {/* Route content will be injected here */}
//         <div className="px-8 py-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }
