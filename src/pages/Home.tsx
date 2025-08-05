import { ChevronDown, Code, MapPin, Phone, Zap } from "lucide-react";

import Skills from "./Skills";
import Experiances from "./Experiances";
import Projects from "./Projects";
import Education from "./Education";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <section id="hero-section">
        {/* Dynamic cursor effect */}
        <div
          className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300"
          style={{
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

        <div className={`text-center z-10 transition-all duration-1000 px-4}`}>
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
                Full-Stack Software Engineer
              </span>{" "}
              <span className="text-red-400 font-semibold">
                {" "}
                with 5+ years of experience
              </span>{" "}
              specializing in
              <span className="text-purple-400 font-semibold">
                {" "}
                AI-powered solutions
              </span>{" "}
              using
              <span className="text-yellow-400 font-semibold">
                {" "}
                Node.js, React, Microservices
              </span>
              , and
              <span className="text-green-400 font-semibold">
                {" "}
                Supabase, MongoDB, PGVector
              </span>
              . Experienced in building
              <span className="text-pink-400 font-semibold">
                {" "}
                scalable AI microservices
              </span>{" "}
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                RAG pipelines
              </span>
              , delivering
              <span className="text-red-400 font-semibold">
                {" "}
                end-to-end software solutions
              </span>{" "}
              using modern web technologies like
              <span className="text-indigo-400 font-semibold">
                {" "}
                LangChain and OpenAI
              </span>
              .
            </p>
          </div>

          {/* Neon buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="relative px-6 md:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold overflow-hidden group transition-all duration-300 transform hover:scale-105">
              <Link
                to={"/skills"}
                className="relative z-10 flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" />
                My Skills
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-50"></div>
            </button>
            <button className="relative px-6 md:px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:text-white">
              <Link
                to={"/contact"}
                className="relative z-10 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Lets Connect
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>
      <section id="skills">
        <Skills />
      </section>

      <section id="experiance">
        <Experiances />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>
    </div>
  );
}
