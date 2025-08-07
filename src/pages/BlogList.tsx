import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-2">
        <Sparkles className="text-cyan-400 animate-pulse" />
        My Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group rounded-xl overflow-hidden border border-cyan-500 bg-[#0f172a] hover:shadow-[0_0_20px_4px_#22d3ee] transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-cyan-400 group-hover:text-white transition duration-300">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2">Click to read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
