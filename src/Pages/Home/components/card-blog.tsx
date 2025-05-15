import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SponsoredPostsImage from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import HobbyToBusinessImage from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import BlogManagementImage from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";
import Detail from "../../Detail/detail"

interface VideoNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string; // Adding the link prop
}

const VideoNewsCard: React.FC<VideoNewsCardProps> = ({
  imageUrl,
  title,
  description,
  link, // Receiving the link prop
}) => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      if (disliked) {
        setDislikes((prev) => prev - 1);
        setDisliked(false);
      }
    } else {
      setLikes((prev) => prev - 1);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes((prev) => prev + 1);
      if (liked) {
        setLikes((prev) => prev - 1);
        setLiked(false);
      }
    } else {
      setDislikes((prev) => prev - 1);
    }
    setDisliked(!disliked);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-lg p-4">
      <Link to={link}> {/* Use the dynamic link prop here */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-lg font-bold text-gray-800 mt-4 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mt-1">{description}</p>
      </Link>

      <div className="flex items-center justify-between mt-4 text-gray-600">
        <div className="flex gap-4">
          <button
            onClick={handleLike}
            aria-label="Like post"
            className={`flex items-center gap-1 hover:text-blue-600 ${liked && "text-blue-600"}`}
          >
            <ThumbsUp size={18} />
            {likes}
          </button>

          <button
            onClick={handleDislike}
            aria-label="Dislike post"
            className={`flex items-center gap-1 hover:text-red-600 ${disliked && "text-red-600"}`}
          >
            <ThumbsDown size={18} />
            {dislikes}
          </button>

          <button
            onClick={() => setShowComment(!showComment)}
            aria-label={showComment ? "Hide comments" : "Show comments"}
            className="flex items-center gap-1 hover:text-green-600"
          >
            <MessageCircle size={18} />
            Comment
          </button>
        </div>

        <button aria-label="Share post" className="hover:text-purple-600 flex items-center gap-1">
          <Share2 size={18} />
          Share
        </button>
      </div>

      {showComment && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Submit
          </button>

          <div className="mt-3 space-y-1">
            {comments.map((cmt, idx) => (
              <p
                key={idx}
                className="text-sm text-gray-700 bg-gray-100 p-2 rounded"
              >
                {cmt}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const VideoNewsSection: React.FC<{ videoNewsData: Array<VideoNewsCardProps> }> = ({
  videoNewsData,
}) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Can Post</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videoNewsData.map((item, index) => (
            <VideoNewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const videoNewsData = [
    {
      imageUrl: BlogManagementImage,
      title:
        "Real Madrid and Dortmund clash in 7-goal thriller with Vinicius scoring Hat-Trick",
      description:
        "Raya’s penalty save last night was phenomenal, and this Arsenal hero deserves credit.",
      link: "/detail", // Adding a link
    },
    {
      imageUrl: SponsoredPostsImage,
      title:
        "MST Story Night releases trailer, captivating Cambodian youth",
      description:
        "The new music video features catchy beats, dance moves, and Jennie's intense expressions.",
      link: "/news/2", // Adding a link
    },
    {
      imageUrl: HobbyToBusinessImage,
      title:
        "Vietnam: A car fell into a river after a bridge collapse, as seen in a viral video",
      description:
        "Disney faces backlash after Snow White controversy.",
      link: "/news/3", // Adding a link
    },
    {
      imageUrl: HobbyToBusinessImage,
      title:
        "Sopharith Kosuma: The young entrepreneur who’s destined for greatness",
      description:
        "Olmo debuts to help Barcelona win 2-1 over Valencia.",
      link: "/news/4", // Adding a link
    },
  ];

  return (
    <div>
      <VideoNewsSection videoNewsData={videoNewsData} />
    </div>
  );
};

export default App;
