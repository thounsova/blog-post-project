import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import SponsoredPostsImage from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import HobbyToBusinessImage from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import BlogManagementImage from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

interface VideoNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const VideoNewsCard: React.FC<VideoNewsCardProps> = ({
  imageUrl,
  title,
  description,
  link,
}) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col p-3 text-sm">
      <Link to={link}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-36 object-cover rounded-md"
        />
        <h3 className="text-base font-semibold text-gray-800 mt-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs line-clamp-3 mt-1">{description}</p>
      </Link>

      <div className="flex items-center justify-between mt-3 text-gray-500 text-xs">
        <div className="flex gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 hover:text-blue-500 ${
              liked && "text-blue-500"
            }`}
          >
            <ThumbsUp size={14} />
            ចូលចិត្ត {likes}
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 hover:text-red-500 ${
              disliked && "text-red-500"
            }`}
          >
            <ThumbsDown size={14} />
            មិនចូលចិត្ត {dislikes}
          </button>

          <button
            onClick={() => setShowComment(!showComment)}
            className="flex items-center gap-1 hover:text-green-500"
          >
            <MessageCircle size={14} />
            មតិ
          </button>
        </div>

        <button className="hover:text-purple-500 flex items-center gap-1">
          <Share2 size={14} />
          ចែករំលែក
        </button>
      </div>

      {showComment && (
        <div className="mt-3">
          <input
            type="text"
            placeholder="សរសេរមតិរបស់អ្នក..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
          >
            បញ្ជូន
          </button>

          <div className="mt-2 space-y-1">
            {comments.map((cmt, idx) => (
              <p
                key={idx}
                className="text-xs text-gray-700 bg-gray-100 p-2 rounded"
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

const VideoNewsSection: React.FC<{
  videoNewsData: Array<VideoNewsCardProps>;
}> = ({ videoNewsData }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          អត្ថបទផ្សព្វផ្សាយ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      title: "ម៉ាឌ្រីដ ប៉ះ ដដមូនដ៍ក្នុងការប្រកួតដ៏រំភើប",
      description: "ការសង្គ្រោះបាល់ប៉េណាល់ទីរបស់ Raya គឺជារឿងអស្ចារ្យ!",
      link: "/detail",
    },
    {
      imageUrl: SponsoredPostsImage,
      title: "កម្មវិធី MST Story Night ទាក់ទាញយុវជនកម្ពុជា",
      description: "បទភ្លេង និងការរាំនាំអារម្មណ៍ខ្ពស់ជាមួយវីដេអូថ្មី។",
      link: "/news/2",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title: "រថយន្តធ្លាក់ចូលទន្លេក្រោយស្ពានរលំនៅវៀតណាម",
      description: "វីដេអូនាំឲ្យមានការពិភាក្សាខ្លាំង។",
      link: "/news/3",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title: "សុផារិទ្ធ គុសុីម៉ា៖ ឧស្សាហកម្មវ័យក្មេងនាំមុខ",
      description: "អ្នកចាប់ផ្តើមវ័យក្មេងដែលមានអនាគតភ្លឺស្វាង។",
      link: "/news/4",
    },
  ];

  return <VideoNewsSection videoNewsData={videoNewsData} />;
};

export default App;
