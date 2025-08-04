import { Code, Database, Server, Smartphone } from "lucide-react";

export default function Skills() {
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

  return (
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
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden `}
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
      </div>
    </div>
  );
}
