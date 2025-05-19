import React from "react";
import BlogCardGrid from "./components/blogCardGrid";
import Hero from "./components/hero";

const Productblog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Blog</h1>
      <Hero />
      <BlogCardGrid />
    </div>
  );
};

export default Productblog;
