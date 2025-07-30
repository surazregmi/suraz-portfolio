import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Calendar,
  Users,
  Award,
  Terminal,
  Zap,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  BookOpen,
} from "lucide-react";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    "Programming Languages": [
      "Node.js",
      "React",
      "Go",
      "Web Components",
      "Angular",
      ".Net",
      "Next.js",
    ],
    Databases: ["MySQL", "NoSQL (MongoDB)", "Firebase"],
    Tools: ["Git", "Jira", "VS Code", "IntelliJ", "Postman"],
    Platforms: ["Linux", "Windows", "MacOS"],
  };

  const projects = [
    {
      title: "Oil Commander LIMS",
      description:
        "Laboratory information management system for oil condition monitoring and fleet management, supporting predictive maintenance for heavy machinery.",
      tech: ["React.js", "Node.js", "Express", "RESTful APIs"],
      company: "Ozdocs International (Infotrak Global)",
      period: "2024 - Present",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Delphi - Drug Discovery Platform",
      description:
        "Drug discovery platform for US biotech firm Nurix Therapeutics, built with modern web technologies.",
      tech: ["LitElement", "Java", "Micronaut", "Hibernate ORM", "AWS"],
      company: "Leapfrog Technology",
      period: "2021 - 2023",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "FlexYear HR System",
      description:
        "Comprehensive HR management system with Angular frontend for payroll and employee management solutions.",
      tech: ["Angular 6+", "Kendo UI", "FormArrays", "AGM Maps"],
      company: "Bentray Technologies",
      period: "2019 - 2021",
      gradient: "from-green-400 to-cyan-500",
    },
    {
      title: "Online MCQ System",
      description:
        "Angular-based SAAS exam portal with advanced features for online assessments and examinations.",
      tech: ["Angular", "TypeScript", "REST APIs"],
      company: "Bentray Technologies",
      period: "2019 - 2021",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Ozdocs International (Infotrak Global)",
      period: "June 2024 - Present",
      location: "Sydney, NSW",
      highlights: [
        "Developed Oil Commander LIMS for laboratory information management",
        "Built optimized React.js frontend interfaces and reporting dashboards",
        "Implemented DRY and SOLID principles for maintainable code",
        "Developed scalable backend services with Node.js and Express",
      ],
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology Pvt Ltd",
      period: "January 2021 - January 2023",
      location: "Kathmandu, Nepal",
      highlights: [
        "Delivered software solutions for Nurix Therapeutics using LitElement and Java",
        "Implemented component-based architecture with Storybook",
        "Designed REST APIs using Micronaut Framework",
        "Created VS Code Extension to boost team productivity",
      ],
    },
    {
      title: "Angular Developer",
      company: "Bentray Technologies",
      period: "June 2019 - December 2021",
      location: "Lalitpur, Nepal",
      highlights: [
        "Delivered HR management system with Angular 6+",
        "Integrated Kendo UI components with advanced filtering",
        "Implemented AGM Maps for geo-location features",
        "Developed localized Nepali date-picker component",
      ],
    },
  ];

  const navigation = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "blogs", label: "Blog", icon: BookOpen },
  ];

  const renderHome = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic cursor effect */}
      <div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>

        {/* Animated geometric shapes */}
        <div className="absolute top-32 right-1/4 w-20 h-20 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 border border-purple-400/20 rotate-45 animate-pulse"></div>
      </div>

      <div
        className={`text-center z-10 transition-all duration-1000 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-8">
          {/* Welcome message */}
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              &lt; Welcome to my digital space /&gt;
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-mono">
              Building the future, one commit at a time
            </p>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Full Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse delay-500">
              Developer
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              Full Stack Developer
            </div>
          </h1>

          {/* Contact info with neon effect */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-cyan-500/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300">Sydney, Australia</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Phone className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">+61 0423248465</span>
            </div>
          </div>
        </div>

        {/* Glowing description */}
        <div className="relative mb-12">
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50">
            <span className="text-cyan-400 font-semibold">
              Results-driven Software Engineer
            </span>{" "}
            with
            <span className="text-purple-400 font-semibold"> 4+ years</span> of
            experience building
            <span className="text-green-400 font-semibold">
              {" "}
              scalable web applications
            </span>{" "}
            and backend services using
            <span className="text-yellow-400 font-semibold">
              Node.js, React, and .Net
            </span>
            . Passionate about{" "}
            <span className="text-pink-400 font-semibold">clean code</span>,
            <span className="text-blue-400 font-semibold">
              SOLID principles
            </span>
            , and delivering
            <span className="text-red-400 font-semibold">
              impactful software solutions
            </span>
            .
          </p>
        </div>

        {/* Neon buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveSection("projects")}
            className="relative px-6 md:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold overflow-hidden group transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Code className="w-5 h-5" />
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-50"></div>
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className="relative px-6 md:px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:text-white"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              My Skills
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
          Crafting digital experiences that make a difference
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 md:w-6 h-5 md:h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300 flex-shrink-0" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/70 text-cyan-300 rounded-full text-xs md:text-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  <p className="font-medium text-purple-400">
                    {project.company}
                  </p>
                  <p className="text-gray-500">{project.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h3>
          <p className="text-gray-400 text-center mb-8 md:mb-12">
            Journey through innovation and growth
          </p>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-cyan-300 mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 md:text-right mt-2 md:mt-0">
                      <p className="text-green-400 font-medium">{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed text-sm md:text-base">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Technical Arsenal
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
          Technologies that power my creative solutions
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="p-3 bg-gray-800/70 rounded-xl border border-gray-600/50">
                    {category === "Programming Languages" && (
                      <Code className="w-6 md:w-8 h-6 md:h-8 text-cyan-400" />
                    )}
                    {category === "Databases" && (
                      <Database className="w-6 md:w-8 h-6 md:h-8 text-green-400" />
                    )}
                    {category === "Tools" && (
                      <Server className="w-6 md:w-8 h-6 md:h-8 text-purple-400" />
                    )}
                    {category === "Platforms" && (
                      <Smartphone className="w-6 md:w-8 h-6 md:h-8 text-orange-400" />
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 md:px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-700/50 transition-all duration-300 cursor-default text-sm md:text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-cyan-300">
                Masters in Information Technology
              </h4>
              <p className="text-purple-400 font-medium mb-2">
                Software Development
              </p>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                University of Technology Sydney (UTS)
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                July 2023 - June 2025
              </p>
            </div>
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-cyan-300">
                Bachelors in Computer Engineering
              </h4>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                Kantipur Engineering College
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                January 2014 - January 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogs = () => (
    <div className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Blog & Insights
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
          Sharing knowledge and experiences from the development trenches
        </p>

        <div className="text-center py-16 md:py-20">
          <div className="relative mb-8">
            <div className="w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-purple-500/50">
              <Award className="w-12 md:w-16 h-12 md:h-16 text-white" />
            </div>
            <div className="absolute inset-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto blur-xl opacity-50"></div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            I'm working on sharing my insights about{" "}
            <span className="text-cyan-400 font-semibold">
              software development
            </span>
            ,
            <span className="text-purple-400 font-semibold">
              {" "}
              best practices
            </span>
            , and the
            <span className="text-green-400 font-semibold">
              {" "}
              latest technologies
            </span>
            . Stay tuned for articles about{" "}
            <span className="text-yellow-400 font-semibold">React</span>,
            <span className="text-pink-400 font-semibold"> Node.js</span>,
            <span className="text-blue-400 font-semibold"> system design</span>,
            and my journey in software engineering.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 md:px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Subscribe for Updates
            </button>
            <button className="px-6 md:px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Follow on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-700/50 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-700/50 transform transition-transform duration-300 lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Avatar and Profile */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-2xl shadow-blue-500/50 animate-pulse">
                <Terminal className="w-12 h-12" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto blur-xl opacity-50 animate-pulse"></div>
            </div>

            <h2 className="text-xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Suraj Kumar Regmi
              </span>
            </h2>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Full Stack Developer with 4+ years of experience building scalable
              applications
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-3 h-3 text-purple-400" />
                <span>+61 0423248465</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-3">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/25"
                          : "text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="flex justify-center gap-4">
              <a
                href="mailto:link2surajregmi@gmail.com"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-red-400 hover:text-red-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-gray-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-blue-400 hover:text-blue-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <div className="lg:pl-0">
          {activeSection === "home" && renderHome()}
          {activeSection === "projects" && renderProjects()}
          {activeSection === "skills" && renderSkills()}
          {activeSection === "blogs" && renderBlogs()}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-700/50 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Let's Build Something Amazing
                </span>
              </h3>
              <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                I'm always interested in discussing new opportunities,
                innovative projects, and the latest in web development. Let's
                connect and create something extraordinary together.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                <a
                  href="mailto:link2surajregmi@gmail.com"
                  className="flex items-center justify-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">link2surajregmi@gmail.com</span>
                </a>
                <a
                  href="tel:+61423248465"
                  className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+61 0423248465</span>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700/50 pt-6">
              <p className="text-gray-400 text-sm md:text-base">
                © 2025 Suraj Kumar Regmi.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
