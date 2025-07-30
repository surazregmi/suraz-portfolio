import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import NotFound from "@/pages/NotFound";
import Blogs from "@/pages/Blogs";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
