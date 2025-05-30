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
  content: string;
  createdAt: string;
  user: {
    username: string;
  };
}

const fadeSlideUpAnimation = {
  animation: "fadeSlideUp 0.6s ease-out forwards",
};

const BlogPost = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

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

    const fetchBlogPostAndComments = async () => {
      try {
        // Fetch blog
        const res = await axios.get(
          `${apiUrl}/api/blogs?filters[documentId][$eq]=${documentId}&populate=*`
        );
        const blogData = res.data.data;
        if (blogData.length === 0) {
          setPost(null);
          return;
        }
        const blogPost = blogData[0];
        setPost(blogPost);

        // Fetch comments
        const commentRes = await axios.get(`${apiUrl}/api/conments?populate=*`);
        const allComments = commentRes.data.data;
        const filtered = allComments.filter(
          (c: any) => c.blog?.id === blogPost.id
        );

        setComments(
          filtered.map((c: any) => ({
            id: c.id,
            content: c.content,
            createdAt: c.createdAt,
            user: c.user || { username: "Unknown" },
          }))
        );
      } catch (err) {
        console.error("Fetch error:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPostAndComments();
  }, [documentId]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!post || !newComment.trim()) return;

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${apiUrl}/api/conments`,
        {
          data: {
            content: newComment,
            blog: documentId,
            user: "sk3gc070bixbum9z4nmjy7iv",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComments((prev) => [
        ...prev,
        {
          id: res.data.id,
          content: newComment,
          createdAt: new Date().toISOString(),
          user: { username: user.username },
        },
      ]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to comment:", err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post)
    return <div className="text-center mt-10">No blog post found.</div>;

  const imageUrl = post.image?.[0] ? getImageUrl(post.image[0]) : "";
  const avatarUrl = post.author?.avatar?.[0]
    ? getImageUrl(post.author.avatar[0])
    : "";

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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

        {/* Comments */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="mb-4">
            {comments.length === 0 ? (
              <p className="text-gray-500">No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="mb-2 border-b pb-2">
                  <p className="text-sm text-gray-700">{comment.content}</p>
                  <p className="text-xs text-gray-500">
                    By {comment.user.username} on{" "}
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleAddComment}>
            <textarea
              className="w-full p-2 border rounded-md mb-2"
              rows={3}
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
