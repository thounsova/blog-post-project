import React from "react";

const Blog: React.FC = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image */}
      <img
        src="https://media.istockphoto.com/id/500593190/photo/composition-finger-frame-mans-hands-capture-the-sunset.jpg?s=612x612&w=0&k=20&c=S7cuvvC_hlu39Fj5jon6__3DD0j265aAsqvYX4C0lEM="
        alt="Blog cover"
        className="w-full h-48 object-cover "
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          How to Start a Blog in 2025
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Learn the key steps to launching your blog — from choosing a niche to
          publishing your first post.
        </p>

        <div className="text-xs text-gray-500 flex justify-between">
          <span>By Aritra Sarkar</span>
          <span>May 9, 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
