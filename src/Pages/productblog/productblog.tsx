import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCardGrid from "./components/blogCardGrid";
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
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {blogs.map((post) => {
          console.log(post);

          return <BlogCardGrid key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Productblog;
