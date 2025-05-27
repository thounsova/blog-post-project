import React from "react";
import parse from "html-react-parser";

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
    <div className="bg-white rounded-md shadow-sm  text-sm transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image container - no top rounded corners here as the whole card has them */}
      <div className="h-48 w-full overflow-hidden">
        {" "}
        {/* Removed rounded-t-xl */}
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {" "}
        <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
          {" "}
          {/* Increased font-weight */}
          {post.title}
        </h2>
        {/* Excerpt */}
        <div className="text-gray-700 mt-2 text-sm line-clamp-3 prose max-w-full">
          {post.content ? parse(post.content) : ""}
        </div>
        {/* Author section */}
        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-200">
          {" "}
          {/* Adjusted gap and padding-top */}
          <img
            src={avatarUrl}
            alt={post.author?.username || "author"}
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
          />
          <div>
            <p className="text-indigo-700 font-medium">
              {post.author?.username}
            </p>
            {post.author?.about && (
              <p className="text-xs text-gray-500">{post.author.about}</p>
            )}
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;
