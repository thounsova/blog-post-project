import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface ImageFormat {
  url: string;
}

interface ImageData {
  url: string;
  formats?: {
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

interface Author {
  username: string;
  avatar?: ImageData[];
}

interface Category {
  title: string;
}

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  content: string;
  author: Author;
  category: Category;
  image: ImageData[];
  createdAt: string;
}

const fadeSlideUpAnimation = {
  animation: "fadeSlideUp 0.6s ease-out forwards",
};

const BlogPost = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const baseURL = "http://localhost:1337";

  const getImageUrl = (imageData: ImageData) => {
    if (!imageData) return "";
    const relativeUrl =
      imageData.formats?.small?.url ||
      imageData.formats?.thumbnail?.url ||
      imageData.url ||
      "";
    if (relativeUrl.startsWith("http")) return relativeUrl;
    return baseURL + relativeUrl;
  };

  useEffect(() => {
    if (!documentId) return;

    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(
          `${apiUrl}/api/blogs?filters[documentId][$eq]=${documentId}&populate=*`
        );

        const blogData = res.data.data;

        if (blogData.length > 0) {
          setPost(blogData[0]);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [documentId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post)
    return <div className="text-center mt-10">No blog post found.</div>;

  const imageUrl =
    post.image && post.image.length > 0 ? getImageUrl(post.image[0]) : "";

  const avatarUrl =
    post.author?.avatar && post.author.avatar.length > 0
      ? getImageUrl(post.author.avatar[0])
      : "";

  return (
    <>
      {/* Add keyframes in style */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className="max-w-3xl mt-[100px] mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col"
        style={fadeSlideUpAnimation}
      >
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center mb-6 space-x-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={post.author?.username || "Author avatar"}
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
            />
          )}
          <div className="text-gray-600 text-sm">
            <p className="font-semibold">
              {post.author?.username || "Unknown"}
            </p>
            <p className="text-xs">
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md mb-8 object-cover max-h-[450px]"
          />
        )}

        {/* Scrollable content area */}
        <div
          className="prose prose-indigo max-w-none overflow-y-auto"
          style={{ maxHeight: "50vh" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
};

export default BlogPost;
