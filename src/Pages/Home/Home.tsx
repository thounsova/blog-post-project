import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/hero";
import Card from "./components/Card-Publishers";
import Step from "./components/Step-card";
import Feedback from "./components/feedback";
import Cardblog from "./components/card-blog";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface Author {
  name: string;
  avatar: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  author: Author;
  views?: string;
  date: string;
}

const Productblog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${apiUrl}/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc`
        );

        setBlogs(res.data.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Hero />
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Optional section heading */}
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
            New Blog Posts
            <div className="p-4 pt-0 flex justify-center  mt-1">
              <Link
                to="/productblog"
                className="inline-block px-4 py-2 text-sm font-medium text-amber-50 bg-blue-200 hover:bg-indigo-700 transition"
              >
                Click to More
              </Link>
            </div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.slice(0, 6).map((post) => {
              console.log(post);
              return <Cardblog key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>

      <Card />
      <Step />
      <Feedback />
    </>
  );
};

export default Productblog;
