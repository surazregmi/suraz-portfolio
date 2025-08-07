import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import NotFound from "@/pages/NotFound";

import HomePage from "@/pages/HomePage";
import Experiances from "@/pages/Experiances";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";
import Resume from "@/components/Resume/Resume";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experiances />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
          <Route path="test" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
