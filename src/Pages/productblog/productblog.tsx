import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCardGrid from "./components/blogCardGrid";
import Hero from "./components/hero";

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
          "http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc"
        );

        const blogData: Blog[] = res.data.data.map((item: any) => {
          const imageUrl =
            item.image && Array.isArray(item.image) && item.image[0]?.url
              ? item.image[0].url.startsWith("http")
                ? item.image[0].url
                : `http://localhost:1337${item.image[0].url}`
              : "https://via.placeholder.com/400x200";

          const author = item.author || {};
          const avatarArray = author.avatar || [];
          const avatarUrl =
            Array.isArray(avatarArray) && avatarArray[0]?.url
              ? avatarArray[0].url.startsWith("http")
                ? avatarArray[0].url
                : `http://localhost:1337${avatarArray[0].url}`
              : "https://i.pravatar.cc/100?img=5";

          return {
            id: item.id,
            title: item.title || "Untitled",
            description: item.content || "No description available.",
            image: imageUrl,
            author: {
              name: author.username || "Unknown",
              avatar: avatarUrl,
            },
            views: item.views?.toString() || "0",
            date: new Date(item.createdAt).toLocaleDateString(),
          };
        });

        setBlogs(blogData);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Blog</h1>
      <Hero />
      <BlogCardGrid posts={blogs} />
    </div>
  );
};

export default Productblog;
