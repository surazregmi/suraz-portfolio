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
  Terminal,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Calendar,
  Download,
  Users,
} from "lucide-react";

const HomePageV2 = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "React Specialist",
    "Node.js Expert",
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Typing animation
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      //   if (!isDeleting && charIndex === currentRole.length) {
      //     setTimeout(() => setIsDeleting(true), 2000);
      //   } else if (isDeleting && charIndex === 0) {
      //     setIsDeleting(false);
      //     roleIndex = (roleIndex + 1) % roles.length;
      //   }
    };

    const typingInterval = setInterval(typeEffect, isDeleting ? 100 : 150);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(typingInterval);
    };
  }, []);

  const skills = {
    Frontend: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Web Components",
    ],
    Backend: [
      "Node.js",
      "Express",
      ".NET",
      "Go",
      "RESTful APIs",
      "Microservices",
    ],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
    "Tools & Others": ["Git", "Docker", "AWS", "VS Code", "Postman", "Jira"],
  };

  const projects = [
    {
      title: "Oil Commander LIMS",
      description:
        "Advanced Laboratory Information Management System for oil condition monitoring and fleet maintenance, supporting predictive analytics for heavy machinery.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      company: "Ozdocs International",
      period: "2024 - Present",
      status: "Production",
      gradient: "from-blue-600 to-purple-600",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Real-time monitoring",
        "Predictive analytics",
        "Fleet management",
        "Report generation",
      ],
    },
    {
      title: "Delphi Drug Discovery",
      description:
        "Cutting-edge drug discovery platform for biotechnology research, built with modern web technologies and cloud infrastructure.",
      tech: ["LitElement", "Java", "Micronaut", "AWS", "Storybook"],
      company: "Leapfrog Technology",
      period: "2021 - 2023",
      status: "Deployed",
      gradient: "from-emerald-600 to-cyan-600",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Component library",
        "Cloud deployment",
        "Research tools",
        "Data visualization",
      ],
    },
    {
      title: "FlexYear HR System",
      description:
        "Comprehensive human resource management platform with payroll integration, employee management, and advanced reporting capabilities.",
      tech: ["Angular 6+", "TypeScript", "Kendo UI", "AGM Maps"],
      company: "Bentray Technologies",
      period: "2019 - 2021",
      status: "Live",
      gradient: "from-orange-600 to-red-600",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Payroll management",
        "Employee tracking",
        "Geo-location",
        "Dynamic forms",
      ],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Ozdocs International (Infotrak Global)",
      period: "June 2024 - Present",
      location: "Sydney, NSW",
      type: "Full-time",
      description:
        "Developing enterprise-level LIMS solutions for oil condition monitoring",
      highlights: [
        "Built scalable React.js frontend with modern UI/UX patterns",
        "Implemented high-performance Node.js backend services",
        "Optimized database queries resulting in 40% performance improvement",
        "Led code reviews and mentored junior developers",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Docker"],
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology",
      period: "January 2021 - January 2023",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      description:
        "Delivered enterprise solutions for international biotech clients",
      highlights: [
        "Developed component-based architecture using LitElement",
        "Built scalable REST APIs with Java and Micronaut framework",
        "Deployed applications on AWS with CI/CD pipelines",
        "Created VS Code extension improving team productivity by 30%",
      ],
      technologies: ["Java", "LitElement", "AWS", "Micronaut", "Storybook"],
    },
    {
      title: "Angular Developer",
      company: "Bentray Technologies",
      period: "June 2019 - December 2021",
      location: "Lalitpur, Nepal",
      type: "Full-time",
      description:
        "Specialized in Angular development for HR and examination systems",
      highlights: [
        "Built responsive Angular applications with complex form validations",
        "Integrated third-party libraries and APIs",
        "Developed custom Nepali date-picker component",
        "Implemented real-time features with WebSocket integration",
      ],
      technologies: ["Angular", "TypeScript", "Kendo UI", "RxJS"],
    },
  ];

  const navigation = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Calendar },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const renderFloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-emerald-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse"></div>

      <div className="absolute top-1/4 left-1/3 text-cyan-400/10 text-6xl font-mono animate-pulse">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-purple-400/10 text-4xl font-mono animate-pulse">
        {"{}"}
      </div>
      <div className="absolute top-3/4 left-1/4 text-emerald-400/10 text-5xl font-mono animate-pulse">
        []
      </div>
    </div>
  );

  const renderHome = () => (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-15 blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {renderFloatingElements()}

      <div
        className={`text-center z-10 transition-all duration-1000 px-4 max-w-6xl mx-auto ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20 mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-medium">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              SURAJ
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              REGMI
            </span>
          </h1>

          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="font-mono">
              {currentText}
              <span className="animate-pulse text-emerald-400">|</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300">Sydney, Australia</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
            <Phone className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">+61 423 248 465</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          <span className="text-emerald-400 font-semibold">
            Passionate Software Engineer
          </span>{" "}
          with
          <span className="text-purple-400 font-semibold"> 4+ years</span> of
          experience crafting
          <span className="text-cyan-400 font-semibold">
            {" "}
            scalable web applications
          </span>{" "}
          and
          <span className="text-pink-400 font-semibold">
            {" "}
            robust backend services
          </span>
          . Specialized in modern technologies like React, Node.js, and .NET
          with a focus on
          <span className="text-yellow-400 font-semibold">
            {" "}
            clean architecture
          </span>{" "}
          and
          <span className="text-red-400 font-semibold">
            {" "}
            innovative solutions
          </span>
          .
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => setActiveSection("projects")}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className="group relative px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <a
            href="#"
            className="group relative px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:text-white hover:border-gray-500"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-600 rounded-2xl rotate-6 transform transition-transform duration-500 hover:rotate-12"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
                <Terminal className="w-32 h-32 text-emerald-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  4+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  20+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-emerald-400 font-semibold">
                  passionate software engineer
                </span>{" "}
                with over 4 years of experience building scalable web
                applications and backend services. My journey began with a
                fascination for how technology can solve real-world problems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in{" "}
                <span className="text-cyan-400 font-semibold">
                  full-stack development
                </span>{" "}
                using modern technologies like React, Node.js, and .NET. I
                believe in writing clean, maintainable code that follows{" "}
                <span className="text-purple-400 font-semibold">
                  SOLID principles
                </span>{" "}
                and industry best practices.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my{" "}
                <span className="text-pink-400 font-semibold">
                  Master's in IT at UTS Sydney
                </span>
                , I'm always learning and staying updated with the latest
                technologies and trends in software development.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold text-emerald-400">
                    Master of Information Technology
                  </h4>
                  <p className="text-gray-300">
                    University of Technology Sydney
                  </p>
                  <p className="text-sm text-gray-400">
                    2023 - 2025 • Software Development
                  </p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold text-cyan-400">
                    Bachelor of Computer Engineering
                  </h4>
                  <p className="text-gray-300">Kantipur Engineering College</p>
                  <p className="text-sm text-gray-400">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions that make a real impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
            >
              <div className="lg:flex">
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-400">
                          {project.company}
                        </span>
                        <span className="text-sm text-emerald-400 font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/70 text-emerald-300 rounded-full text-sm border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-all duration-300">
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/3 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-xl opacity-20 absolute inset-0 rotate-6 group-hover:rotate-12 transition-transform duration-500`}
                    ></div>
                    <div className="aspect-[4/3] bg-gray-800 rounded-xl border border-gray-700 relative overflow-hidden">
                      <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="p-6 pt-12">
                        <div
                          className={`w-full h-4 bg-gradient-to-r ${project.gradient} rounded mb-4 opacity-50`}
                        ></div>
                        <div className="space-y-2">
                          <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
                          <div className="w-1/2 h-2 bg-gray-600 rounded"></div>
                          <div className="w-2/3 h-2 bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderSkills = () => (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools that power my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gray-800/70 rounded-xl border border-gray-600/50">
                    {category === "Frontend" && (
                      <Code className="w-8 h-8 text-cyan-400" />
                    )}
                    {category === "Backend" && (
                      <Server className="w-8 h-8 text-emerald-400" />
                    )}
                    {category === "Database" && (
                      <Database className="w-8 h-8 text-purple-400" />
                    )}
                    {category === "Tools & Others" && (
                      <Terminal className="w-8 h-8 text-orange-400" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderExperience = () => (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Journey through innovation and growth
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="lg:flex lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-cyan-300 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                  </div>
                  <div className="text-sm text-gray-400 lg:text-right lg:ml-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-emerald-400 font-medium">
                        {exp.period}
                      </span>
                      <span className="text-gray-500">{exp.location}</span>
                      <span className="text-purple-400 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gray-800/70 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">Let's discuss opportunities</p>
                </div>
              </div>
              <a
                href="mailto:link2surajregmi@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                link2surajregmi@gmail.com
              </a>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">Call for urgent matters</p>
                </div>
              </div>
              <a
                href="tel:+61423248465"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                +61 423 248 465
              </a>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Based in</p>
                </div>
              </div>
              <p className="text-cyan-400 font-medium">Sydney, Australia</p>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://linkedin.com/in/suraj-regmi123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://github.com/surazregmi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-600/20 hover:bg-gray-600/30 rounded-xl border border-gray-500/30 hover:border-gray-500/60 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-400" />
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500/50 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCurrentSection = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "about":
        return renderAbout();
      case "projects":
        return renderProjects();
      case "skills":
        return renderSkills();
      case "experience":
        return renderExperience();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl border text-emerald-400 hover:text-emerald-300 transition-all duration-300 ${
          isScrolled || activeSection !== "home"
            ? "bg-gray-900/90 backdrop-blur-md border-gray-700/50"
            : "bg-gray-900/60 backdrop-blur-sm border-gray-800/50"
        }`}
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
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-2xl shadow-emerald-500/25">
                <Terminal className="w-12 h-12" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 rounded-full mx-auto blur-xl opacity-50"></div>
            </div>

            <h2 className="text-xl font-bold mb-2">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text text-transparent">
                Suraj Kumar Regmi
              </span>
            </h2>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Full Stack Developer with 4+ years of experience building scalable
              applications
            </p>

            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-3 h-3 text-purple-400" />
                <span>+61 423 248 465</span>
              </div>
            </div>
          </div>

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
                          ? "bg-gradient-to-r from-emerald-500/20 to-purple-600/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                          : "text-gray-400 hover:text-emerald-400 hover:bg-gray-800/50"
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

          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="flex justify-center gap-4">
              <a
                href="mailto:link2surajregmi@gmail.com"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-red-400 hover:text-red-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/surazregmi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-gray-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/suraj-regmi123"
                target="_blank"
                rel="noopener noreferrer"
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
      <div className="flex-1 lg:ml-80">
        {renderCurrentSection()}

        {/* Footer */}
        <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </span>
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities and
                innovative projects. Let's connect and create something
                extraordinary together.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:link2surajregmi@gmail.com"
                  className="flex items-center justify-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">link2surajregmi@gmail.com</span>
                </a>
                <a
                  href="tel:+61423248465"
                  className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+61 423 248 465</span>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700/50 pt-6">
              <p className="text-gray-400">
                © 2025 Suraj Kumar Regmi. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePageV2;
