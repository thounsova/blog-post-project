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

interface Comment {
  id: number;
  username: string;
  content: string;
  createdAt: string;
}

const fadeSlideUpAnimation = {
  animation: "fadeSlideUp 0.6s ease-out forwards",
};

const BlogPost = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
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

    const fetchData = async () => {
      try {
        // Fetch the blog post
        const postRes = await axios.get(
          `${apiUrl}/api/blogs?filters[documentId][$eq]=${documentId}&populate=*`
        );
        const blogData = postRes.data.data;

        if (blogData.length > 0) {
          setPost(blogData[0]);

          // Fetch comments for the post
          const commentsRes = await axios.get(
            `http://localhost:1338/api/conments?filters[blogId][$eq]=${blogData[0].id}`
          );
          setComments(commentsRes.data.data);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

        <div
          className="prose prose-indigo max-w-none overflow-y-auto"
          style={{ maxHeight: "50vh" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="border p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>{comment.username}</strong>: {comment.content}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>      </div>
    </>
  );
};

export default BlogPost;
