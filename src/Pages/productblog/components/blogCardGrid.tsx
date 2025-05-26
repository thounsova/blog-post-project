import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

interface Avatar {
  url: string;
  formats?: {
    thumbnail?: { url: string };
  };
}

interface Author {
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
  const avatarUrl =
    post.author?.avatar?.[0]?.formats?.thumbnail?.url ||
    post.author?.avatar?.[0]?.url ||
    "";

  const imageUrl =
    post.image?.[0]?.formats?.thumbnail?.url || post.image?.[0]?.url || "";

  return (
    <Link to={`/blog/${post.documentId}`} className="block">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="h-48 w-full overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            {post.title}
          </h2>

          <div className="text-sm text-gray-600 mt-2 line-clamp-3">
            {post.content ? parse(post.content) : ""}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img
                src={avatarUrl}
                alt={post.author?.username || "author"}
                className="w-9 h-9 rounded-full border border-indigo-200"
              />
              <div>
                <p className="text-sm font-medium text-indigo-600">
                  {post.author?.username}
                </p>
                {post.author?.about && (
                  <p className="text-xs text-gray-400">{post.author.about}</p>
                )}
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>

            <div className="text-gray-500 text-sm flex items-center gap-1">
              👁️ {post.views || "0"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardGrid;
