import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import axios from "axios";

interface Avatar {
  url: string;
  formats?: {
    thumbnail?: { url: string };
  };
}

interface Author {
  id: number;
  username: string;
  avatar: Avatar[];
  about?: string;
}

interface Image {
  url: string;
  formats?: {
    thumbnail?: { url: string };
  };
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: Image[];
  author: Author;
  views?: string;
  date: string;
  documentId: string;
  
}

interface BlogCardGridProps {
  post: BlogPost;
}

const BlogCardGrid: React.FC<BlogCardGridProps> = ({ post }) => {
  const navigate = useNavigate();

  const avatarUrl =
    post.author?.avatar?.[0]?.formats?.thumbnail?.url ||
    post.author?.avatar?.[0]?.url ||
    "";

  const imageUrl =
    post.image?.[0]?.formats?.thumbnail?.url || post.image?.[0]?.url || "";

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("userData") || "{}");

  const fetchLikes = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/likes?populate=*");
      const likes = res.data.data;

      const postLikesByUser = likes.filter(
        (like: any) =>
          like.blog?.documentId === post.documentId &&
          like.users?.some((u: any) => u.id === user.id)
      );
      setLiked(postLikesByUser.length > 0);

      const totalLikes = likes.filter(
        (like: any) => like.blog?.documentId === post.documentId
      ).length;
      setLikesCount(totalLikes);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [post.documentId, user.id]);

  const toggleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user.id) {
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      if (!liked) {
        await axios.post("http://localhost:1337/api/likes", {
          data: {
            documentId: post.documentId,
            blog: post.id,
            users: [user.id],
          },
        });
      } else {
        const likesRes = await axios.get(
          "http://localhost:1337/api/likes?populate=*"
        );
        const likeToDelete = likesRes.data.data.find(
          (like: any) =>
            like.blog?.documentId === post.documentId &&
            like.users?.some((u: any) => u.id === user.id)
        );

        if (likeToDelete) {
          await axios.delete(
            `http://localhost:1337/api/likes/${likeToDelete.id}`
          );
        }
      }

      await fetchLikes();
    } catch (error) {
      console.error("Failed to toggle like:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm text-sm transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/blog/${post.documentId}`} className="block">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
            {post.title}
          </h2>

          <div className="text-gray-700 mt-2 text-sm line-clamp-3 prose max-w-full">
            {post.content ? parse(post.content) : ""}
          </div>
        </div>
      </Link>

      {/* Like Button */}
      <div className="px-4 pt-2 pb-2 flex items-center justify-between">
        <button
          onClick={toggleLike}
          disabled={loading}
          className={`flex items-center gap-1 text-sm ${
            liked ? "text-red-500" : "text-gray-600 hover:text-red-500"
          } transition-colors`}
        >
          <Heart
            className={`w-5 h-5 transition-transform ${
              liked ? "fill-red-500 scale-110" : "text-gray-400"
            }`}
          />
          <span>{likesCount}</span>
        </button>
      </div>

      {/* Author Info */}
      <div className="px-4 pb-4 mt-auto flex items-center gap-3 border-t border-gray-200">
        <Link to={`/profile/${post.author.username}`}>
          <img
            src={avatarUrl}
            alt={post.author?.username || "author"}
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400 hover:scale-105 transition-transform"
          />
        </Link>
        <div>
          <Link
            to={`/profile/${post.author.username}`}
            className="text-indigo-700 font-medium hover:underline"
          >
            {post.author?.username}
          </Link>
          {post.author?.about && (
            <p className="text-xs text-gray-500">{post.author.about}</p>
          )}
          <p className="text-xs text-gray-500">{post.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;
