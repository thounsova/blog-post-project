import React from 'react';
import { motion } from 'framer-motion';
import Images from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import Image from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import Imag from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

const PopularPosts = () => {
  const posts = [
    {
      title: 'From Hobby To Business: 51 Reasons Blogging Can Become Your Full-Time Career In 2025',
      date: 'Monday Jan 20, 2020',
      excerpt: '"Blogging is writing about what extreme sports are to at',
      link: '#',
      imageSrc: Images,
    },
    {
      title: 'Blog Management Platform: How It Helps Bloggers?',
      date: 'Monday Jan 20, 2020',
      excerpt: "If you're a blogger and you're here, you sure are looki",
      link: '#',
      imageSrc: Imag,
    },
    {
      title: 'Sponsored Posts Vs Guest Posts: What\'s Best For Revenue?',
      date: 'Monday Jan 20, 2020',
      excerpt: 'Blogging serves as a creative outlet for building relations',
      link: '#',
      imageSrc: Image,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Popular <span className="text-blue-500">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img className="w-full h-48 object-fit" src={post.imageSrc} alt={post.title} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
