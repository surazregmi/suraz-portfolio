export default function Projects() {
  const projects = [
    {
      title: "AI powered Project Management Tool (Cognify Ops)",
      description:
        "AI powered Project Management tool that answers based on the knowledge base with vector similarity search and RAG pipelines.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "RESTful APIs",
        "Typescript",
        "Prisma ORM",
        "Supabase",
        "PGVector",
        "LangChain",
        "OpenAI",
        "Microservices",
        "AWS SQS",
        "RAG Pipelines",
        "JWT",
        "Yup",
      ],
      company: "Capstone Project - Kings own Institute",
      period: "June 2024 - June 2025",
      gradient: "from-cyan-400 to-blue-500",
    },

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

  return (
    <div className=" md:py-20 px-4 md:px-6">
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
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden `}
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
      </div>
    </div>
  );
}
