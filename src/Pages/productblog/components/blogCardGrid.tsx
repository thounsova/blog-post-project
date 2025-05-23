import React from "react";
import parse from "html-react-parser";

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: Author;
  views?: string;
  date: string;
}

interface BlogCardGridProps {
  posts: BlogPost[];
}

const BlogCardGrid: React.FC<BlogCardGridProps> = ({ posts }) => {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Image */}
          <div className="h-48 w-full overflow-hidden rounded-t-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object- transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors cursor-pointer">
              {post.title}
            </h2>
            <div className="text-sm text-gray-600 mt-2 line-clamp-3">
              {parse(post.description)}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-9 h-9 rounded-full border border-indigo-200"
                />
                <div>
                  <p className="text-sm font-medium text-indigo-600">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-1">
                👁️ {post.views || "0"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardGrid;
