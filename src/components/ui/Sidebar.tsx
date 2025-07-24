import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaUser,
  FaBriefcase,
  FaTags,
  FaFileAlt,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import profilePic from "../../assets/profile-pic.png";

const navLinks = [
  { label: "About Me", icon: FaUser, path: "/" },
  { label: "Skills", icon: FaBriefcase, path: "/skills" },
  { label: "Projects", icon: FaTags, path: "/projects" },
  { label: "Resume", icon: FaFileAlt, path: "/resume" },
  { label: "Blog", icon: FaBlog, path: "/blog" },
  { label: "Contact", icon: FaEnvelope, path: "/contact" },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    url: "https://linkedin.com/in/suraj-regmi123",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    url: "https://github.com/surazregmi",
    label: "GitHub",
  },
];

const Sidebar = () => {
  return (
    <aside className="relative bg-gray-900 text-white w-72 h-full p-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 animate-moveCode z-0 whitespace-pre-wrap text-green-400 text-xs font-mono pointer-events-none px-4 leading-5">
        {"const greet = 'Hello, Suraj!';\nconsole.log(greet);\n".repeat(50)}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Profile */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Suraj Regmi</h2>
          <img
            src={profilePic}
            alt="Suraj Regmi"
            className="rounded-full w-24 h-24 mx-auto my-6"
          />
          <p className="text-sm leading-relaxed">
            Hi, I'm Suraj Regmi, a passionate software engineer. Welcome to my
            personal website!
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 my-6">
          {socialLinks.map(({ icon: Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-8">
          <ul className="space-y-2">
            {navLinks.map(({ label, icon: Icon, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="flex items-center gap-3 p-3 hover:bg-green-700 rounded transition"
                >
                  <Icon />
                  <span className="text-sm font-semibold">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hire Me Button */}
        <Link
          to="/contact"
          className="mt-6 w-full bg-green-700 py-2 rounded flex justify-center items-center gap-2 hover:bg-green-800 transition"
        >
          <FaEnvelope />
          Hire Me
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
