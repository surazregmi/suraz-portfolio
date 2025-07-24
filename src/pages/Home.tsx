// src/pages/Home.tsx

import Button from "../components/ui/Button";
import profilePic from "../assets/profile-pic.png";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="main-content ">
      <h1 className="text-4xl font-bold ">Suraj Regmi</h1>
      <p className="text-xl text-gray-600">Software Engineer</p>
      <p className="text-gray-700 mt-4">
        I'm Suraj Regmi, a full-stack software engineer with over 4 years of
        experience building scalable web applications and backend services using
        technologies like React, Node.js, and .NET. I specialize in designing
        clean, modular, and maintainable systems, and I’m passionate about
        delivering impactful solutions that align with business goals. With
        hands-on experience across frontend, backend, and cloud environments, I
        bring a balanced and thoughtful approach to modern software development.
        Currently,
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        <Button type="green" label="View Portfolio" />

        <Link to="/resume">
          <Button type="dark" label="View Resume" />
        </Link>
      </div>

      <hr className="my-8" />

      <h2 className="text-3xl font-bold">What I do</h2>
      <p className="text-gray-400 mt-2">
        I have more than 4 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          { title: "Vanilla JavaScript" },
          { title: "Angular, React & Vue" },
          { title: "Node.js" },
          { title: "Python & Django" },
        ].map(({ title }, i) => (
          <div key={i} className="space-y-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full text-center leading-10">
              JS
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">
              Description here. You can change the icon above to any of the
              2000+ FontAwesome 5 free icons.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
