// src/components/Sidebar.tsx
import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaUser,
  FaBriefcase,
  FaTags,
  FaFileAlt,
  FaBlog,
  FaEnvelope,
  FaAngleDown,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import profilePic from "../../assets/profile-pic.png";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-600 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <aside
        className={`bg-green-600 text-white w-full lg:w-64 p-6 fixed top-0 left-0 h-full z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Suraj Regmi</h2>
          <img
            src={profilePic}
            alt="Suraj Regmi"
            className="rounded-full w-32 h-32 mx-auto my-4"
          />
          <p className="text-sm">
            Hi, my name is Suraj Regmi and I'm asoftware engineer. Welcome to my
            personal website!
          </p>
        </div>

        <div className="flex justify-center my-4 gap-3">
          {[FaTimes, FaLinkedinIn, FaGithub, FaYoutube, FaInstagram].map(
            (Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center"
              >
                <Icon />
              </button>
            )
          )}
        </div>

        <ul className="space-y-3 text-sm font-semibold">
          {[FaUser, FaBriefcase, FaTags, FaFileAlt, FaBlog, FaEnvelope].map(
            (Icon, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon />
                <span>
                  {
                    [
                      "About Me",
                      "Portfolio",
                      "Services & Pricing",
                      "Resume",
                      "Blog",
                      "Contact",
                    ][i]
                  }
                </span>
              </li>
            )
          )}
          <li className="flex items-center gap-2">
            <FaAngleDown />
            More Pages
          </li>
        </ul>

        <button className="mt-6 w-full bg-green-700 py-2 rounded flex justify-center items-center gap-2">
          <FaEnvelope />
          Hire Me
        </button>
      </aside>
    </>
  );
}
