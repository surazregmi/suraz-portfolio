import Button from "../components/ui/Button";
import profilePic from "../assets/profile-pic.png";

import { FaArrowAltCircleRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AngularIcon, ReactIcon } from "@/components/icons";
import { Code, Database, Server, Terminal } from "lucide-react";
export default function Home() {
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

  return (
    <div className="main-content ">
      <h1 className="text-4xl font-bold ">Suraj Regmi</h1>
      <p className="text-2xl font-light text-gray-600">Software Engineer</p>
      <p className="mt-4 font-normal">
        I'm Suraj Regmi, a full-stack software engineer with over 4 years of
        experience building scalable web applications and backend services using
        technologies like React, Node.js, and .NET. I specialize in designing
        clean, modular, and maintainable systems, and I’m passionate about
        delivering impactful solutions that align with business goals. With
        hands-on experience across frontend, backend, and cloud environments, I
        bring a balanced and thoughtful approach to modern software development.
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        <Link to="/projects">
          <Button
            type="green"
            label="View Portfolio"
            icon={<FaArrowAltCircleRight />}
          />
        </Link>

        <Link to="/resume">
          <Button
            type="dark"
            label="View Resume"
            icon={<FaArrowAltCircleRight />}
          />
        </Link>
      </div>

      <hr className="my-8" />

      <h2 className="text-3xl font-bold">What I do</h2>
      <p className="mt-2">
        I have more than 4 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use.
      </p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          { title: "Frontend" ,description:"Angular | React | Typescript | Tailwind | HTML5 CSS3", icon:<AngularIcon/>},
          { title: "Backend", description:"Node.js | Java | .Net", icon:<ReactIcon/> },
          { title: "Cloud",description:"AWS | Terraform | Docker | CI CD", icon:<ReactIcon/>  },
          { title: "Tools and platform",description:"GIT | Jira | Postman | VS Code ", icon:<ReactIcon/>  },
        ].map(({ title ,description,icon}, i) => (
          <div key={i} className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div> */}

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
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
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
    </div>
  );
}
