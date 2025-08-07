import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Me", to: "/" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
    { name: "Blogs", to: "/blog" },
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
