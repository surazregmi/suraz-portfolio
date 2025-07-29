import Button from "../components/ui/Button";
import profilePic from "../assets/profile-pic.png";

import { FaArrowAltCircleRight } from "react-icons/fa";


import { Link } from "react-router-dom";
import { AngularIcon, ReactIcon } from "@/components/icons";
export default function Home() {
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
        <Button type="green" label="View Portfolio" icon={<FaArrowAltCircleRight />} /></Link>
       

        <Link to="/resume">
          <Button type="dark" label="View Resume" icon={<FaArrowAltCircleRight />} />
        </Link>
      </div>

      <hr className="my-8" />

      <h2 className="text-3xl font-bold">What I do</h2>
      <p className="mt-2">
        I have more than 4 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
      </div>
    </div>
  );
}
