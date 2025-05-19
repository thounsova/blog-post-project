import React from "react";

// Example data array
const blogPosts = [
  {
    id: 1,
    title: "Responsive Image Gallery in Tailwind",
    description:
      "Learn how to build a flexible image gallery layout using grid and utility classes.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Prajwal Hallale",
      avatar: "https://avatars.githubusercontent.com/u/25615135?v=4",
    },
    views: "9.9k",
    date: "1 year ago",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips and Tricks",
    description:
      "Speed up your UI workflow with these handy Tailwind utilities.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    views: "6.4k",
    date: "8 months ago",
  },
  {
    id: 3,
    title: "Building Cards with React & Tailwind",
    description:
      "A guide to creating reusable and responsive cards in your React projects.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    views: "5.1k",
    date: "3 months ago",
  },
  {
    id: 3,
    title: "Building Cards with React & Tailwind",
    description:
      "A guide to creating reusable and responsive cards in your React projects.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    views: "5.1k",
    date: "3 months ago",
  },
  {
    id: 4,
    title: "Building Cards with React & Tailwind",
    description:
      "A guide to creating reusable and responsive cards in your React projects.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    views: "5.1k",
    date: "3 months ago",
  },
  {
    id: 5,
    title: "Building Cards with React & Tailwind",
    description:
      "A guide to creating reusable and responsive cards in your React projects.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    views: "5.1k",
    date: "3 months ago",
  },
  {
    id: 6,
    title: "Building Cards with React & Tailwind",
    description:
      "A guide to creating reusable and responsive cards in your React projects.",
    image:
      "https://cdn.dribbble.com/userupload/16522311/file/original-2e65eb7f013558ee580d67a0854e2778.jpg?resize=400x0",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    views: "5.1k",
    date: "3 months ago",
  },
];

const BlogCardGrid = () => {
  return (
    <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Image */}
          <div
            className="h-48 bg-gray-300"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800  cursor-pointer">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{post.description}</p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                👁️ {post.views}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardGrid;
