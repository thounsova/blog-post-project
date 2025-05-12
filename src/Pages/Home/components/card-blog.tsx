import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from "lucide-react";
import SponsoredPostsImage from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import HobbyToBusinessImage from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import BlogManagementImage from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

// Define interfaces for component props and states
interface VideoNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

interface VideoNewsSectionProps {
  videoNewsData: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
}

const VideoNewsCard: React.FC<VideoNewsCardProps> = ({
  imageUrl,
  title,
  description,
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
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-fit rounded-lg"
      />
      <h3 className="text-lg font-bold text-gray-800 mt-4 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 mt-1">{description}</p>

      <div className="flex items-center justify-between mt-4 text-gray-600">
        <div className="flex gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 hover:text-blue-600 ${
              liked && "text-blue-600"
            }`}
          >
            <ThumbsUp size={18} />
            {likes}
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 hover:text-red-600 ${
              disliked && "text-red-600"
            }`}
          >
            <ThumbsDown size={18} />
            {dislikes}
          </button>

          <button
            onClick={() => setShowComment(!showComment)}
            className="flex items-center gap-1 hover:text-green-600"
          >
            <MessageCircle size={18} />
            Comment
          </button>
        </div>

        <button className="hover:text-purple-600 flex items-center gap-1">
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

const VideoNewsSection: React.FC<VideoNewsSectionProps> = ({
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
        "សម្រុកគ្នាសាហាវណាស់ ៧គ្រាប់ ១ប្រកួត Real Madrid និង Dortmund ខណៈ Vinicius ស៊ុត Hat-Trick",
      description:
        "ការសង្គ្រោះប៉េណាល់ទី របស់ Raya យប់មិញ អស្ចារ្យ ហ្នឹង វីរបុរស Arsenal ម្នាក់នេះ",
    },
    {
      imageUrl: SponsoredPostsImage,
      title:
        "MST Story Night បញ្ចេញ Trailer ទាក់ទាញចិត្តមនុស្សវ័យជំទង់នៅកម្ពុជា",
      description:
        "ទម្លាក់ MV ថ្មី ទាំងចង្វាក់ ក្បាច់រាំ កាយវិការ ទឹកមុខ Jennie ហ៊ឺ ខ្លាំង",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title: "វៀតណាម៖ វីដេអូមួយថតជាប់ឡានធ្លាក់ចូលទន្លេ ក្នុងពេលស្ពានបាក់រលំ",
      description:
        "កត្តាធំៗធ្វើឱ្យ Disney ជួបការរិះគន់ទក់សាច់ពីមហាជនដោយសាររឿង Snow White",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title:
        "ស្អាត ឆ្លាត ពូកែ! សុភ័ក្រ្ត កុសុមា នៅមានចំណុចពិសេសទាំងនេះទៀត ធ្វើឱ្យអនាគតស្វាមី",
      description:
        "Olmo បង្ហាញខ្លួនប្រកួតដំបូងជួយ Barcelona ឈ្នះម្ចាស់ផ្ទះ Vallencano ២-១",
    },
  ];

  return (
    <div>
      <VideoNewsSection videoNewsData={videoNewsData} />
    </div>
  );
};

export default App;
