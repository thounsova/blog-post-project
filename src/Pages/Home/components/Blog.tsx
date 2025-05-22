import React from "react";
import { motion } from "framer-motion";
import Images from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import Image from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import Imag from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  imageSrc: string;
  profileName: string;
  profileRole: string;
  profileImageSrc: string;
}

const PopularPosts: React.FC = () => {
  const posts: Post[] = [
    {
      title:
        "From Hobby To Business: 51 Reasons Blogging Can Become Your Full-Time Career In 2025",
      date: "Monday Jan 20, 2020",
      excerpt: '"Blogging is writing about what extreme sports are to at',
      link: "#",
      imageSrc: Images,
      profileName: "Chan Dara",
      profileRole: "Content Editor",
      profileImageSrc: "https://i.pravatar.cc/40?img=10",
    },
    {
      title: "Blog Management Platform: How It Helps Bloggers?",
      date: "Monday Jan 20, 2020",
      excerpt: "If you're a blogger and you're here, you sure are looki",
      link: "#",
      imageSrc: Imag,
      profileName: "Sophea Keo",
      profileRole: "Blogger",
      profileImageSrc: "https://i.pravatar.cc/40?img=20",
    },
    {
      title: "Sponsored Posts Vs Guest Posts: What's Best For Revenue?",
      date: "Monday Jan 20, 2020",
      excerpt: "Blogging serves as a creative outlet for building relations",
      link: "#",
      imageSrc: Image,
      profileName: "Vichea Chum",
      profileRole: "Reporter",
      profileImageSrc: "https://i.pravatar.cc/40?img=30",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center">
          Popular <span className="text-blue-500">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                className="w-full h-36 object-fit"
                src={post.imageSrc}
                alt={post.title}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-800 mb-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs mb-1">{post.date}</p>
                <p className="text-gray-700 text-sm mb-3 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Small Profile Section */}
                <div className="flex items-center gap-3 border-t border-gray-200 mt-auto pt-2">
                  <img
                    src={post.profileImageSrc}
                    alt={post.profileName}
                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-900 font-semibold text-xs leading-tight">
                      {post.profileName}
                    </p>
                    <p className="text-blue-600 text-[10px] font-medium">
                      {post.profileRole}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded"
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
