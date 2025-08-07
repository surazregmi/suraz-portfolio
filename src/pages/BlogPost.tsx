// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (blog) {
      fetch(blog.url)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [blog]);

  if (!blog) return <div className="p-8">Blog not found</div>;
  if (!markdown) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
