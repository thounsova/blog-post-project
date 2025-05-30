import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCardGrid from "./components/blogCardGrid";
import CategoryFilter from "./components/hero";
import Search from "./components/sreach";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface MediaAttributes {
  url: string;
}

interface MediaData {
  data: {
    id: number;
    attributes: MediaAttributes;
  } | null;
}

interface Author {
  name: string;
  avatar: MediaData;
}

interface Image {
  id: number;
  attributes: MediaAttributes;
}

interface Blog {
  id: number;
  title: string;
  content: string;
  image: {
    data: Image[];
  };
  author: Author;
  views?: string;
  date: string;
  documentId: string;
}

interface Category {
  id: number;
  title: string;
}

interface ApiResponse<T> {
  data: T[];
  meta?: any;
}

const Productblog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async (categoryId?: number) => {
    try {
      let url = `${apiUrl}/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc`;
      if (categoryId) {
        url += `&filters[category][id][$eq]=${categoryId}`;
      }

      const res = await axios.get<ApiResponse<Blog>>(url);
      setBlogs(res.data.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs(selectedCategory?.id);
  }, [selectedCategory]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search query={searchQuery} setQuery={setSearchQuery} />
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {filteredBlogs.map((post) => (
            <BlogCardGrid key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productblog;
