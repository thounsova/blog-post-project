import React, { useState, ChangeEvent, MouseEvent } from "react";
import { motion } from "framer-motion";
import Images from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import Image from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import Imag from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  imageSrc: string;
}

interface Comment {
  postIndex: number;
  text: string;
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
    },
    {
      title: "Blog Management Platform: How It Helps Bloggers?",
      date: "Monday Jan 20, 2020",
      excerpt: "If you're a blogger and you're here, you sure are looki",
      link: "#",
      imageSrc: Imag,
    },
    {
      title: "Sponsored Posts Vs Guest Posts: What's Best For Revenue?",
      date: "Monday Jan 20, 2020",
      excerpt: "Blogging serves as a creative outlet for building relations",
      link: "#",
      imageSrc: Image,
    },
  ];

  // State to track likes, dislikes, and comment visibility for each post
  const [likes, setLikes] = useState<number[]>(posts.map(() => 0));
  const [dislikes, setDislikes] = useState<number[]>(posts.map(() => 0));
  const [liked, setLiked] = useState<boolean[]>(posts.map(() => false));
  const [disliked, setDisliked] = useState<boolean[]>(posts.map(() => false));
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [visibleComments, setVisibleComments] = useState<
    Record<number, boolean>
  >({});

  const handleCommentSubmit = (postIndex: number): void => {
    if (commentText.trim() !== "") {
      const newComment: Comment = { postIndex, text: commentText };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText(""); // Reset comment text
    }
  };

  const toggleCommentsVisibility = (postIndex: number): void => {
    setVisibleComments((prev) => ({
      ...prev,
      [postIndex]: !prev[postIndex],
    }));
  };

  const handleLike = (index: number): void => {
    const updatedLikes = [...likes];
    const updatedLiked = [...liked];
    if (updatedLiked[index]) {
      updatedLikes[index] -= 1; // decrease like count if already liked
    } else {
      updatedLikes[index] += 1; // increase like count if not liked
    }
    updatedLiked[index] = !updatedLiked[index]; // toggle like state
    setLikes(updatedLikes);
    setLiked(updatedLiked);
  };

  const handleDislike = (index: number): void => {
    const updatedDislikes = [...dislikes];
    const updatedDisliked = [...disliked];
    if (updatedDisliked[index]) {
      updatedDislikes[index] -= 1; // decrease dislike count if already disliked
    } else {
      updatedDislikes[index] += 1; // increase dislike count if not disliked
    }
    updatedDisliked[index] = !updatedDisliked[index]; // toggle dislike state
    setDislikes(updatedDislikes);
    setDisliked(updatedDisliked);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Popular <span className="text-blue-500">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const postComments = comments.filter(
              (cmt) => cmt.postIndex === index
            );
            const isCommentsVisible = visibleComments[index] || false;

            return (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  className="w-full h-48 object-fit"
                  src={post.imageSrc}
                  alt={post.title}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>

                  {/* Like/Dislike Buttons */}
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
                      onClick={() => handleLike(index)}
                    >
                      <ThumbsUp size={18} />
                      {likes[index]} {/* Display like count */}
                    </button>
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-red-600"
                      onClick={() => handleDislike(index)}
                    >
                      <ThumbsDown size={18} />
                      {dislikes[index]} {/* Display dislike count */}
                    </button>
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-green-600"
                      onClick={() => toggleCommentsVisibility(index)} // Toggle comment visibility
                    >
                      <MessageCircle size={18} />
                      Comment
                    </button>
                  </div>

                  {/* Comment Section */}
                  {isCommentsVisible && (
                    <div className="space-y-2 mt-4">
                      {postComments.length > 0 ? (
                        postComments.map((comment, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-gray-700 bg-gray-100 p-2 rounded"
                          >
                            {comment.text}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          No comments yet.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Add a comment input field */}
                  {isCommentsVisible && (
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setCommentText(e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
                      />
                      <button
                        onClick={() => handleCommentSubmit(index)}
                        className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
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
