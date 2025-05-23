import React from "react";
import { Link } from "react-router-dom";
import SponsoredPostsImage from "../../../assets/Sponsored-Posts-vs-Guest-Posts.png";
import HobbyToBusinessImage from "../../../assets/From-Hobby-To-Business-Blogging-Can-Become-Your-Full-Time-Career-1.png";
import BlogManagementImage from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

interface VideoNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  profileName?: string;
  profileRole?: string;
  profileImageUrl?: string;
}

const VideoNewsCard: React.FC<VideoNewsCardProps> = ({
  imageUrl,
  title,
  description,
  link,
  profileName = "Chan Dara",
  profileRole = "Content Editor",
  profileImageUrl = "https://i.pravatar.cc/40",
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col p-3 text-sm">
    <Link to={link} className="flex flex-col flex-grow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="text-base font-semibold text-gray-800 mt-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 text-xs line-clamp-3 mt-1">{description}</p>

      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-200">
        <img
          src={profileImageUrl}
          alt={profileName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 text-sm font-semibold">{profileName}</p>
          <p className="text-gray-500 text-xs">{profileRole}</p>
        </div>
      </div>
    </Link>
  </div>
);

const VideoNewsSection: React.FC<{ videoNewsData: VideoNewsCardProps[] }> = ({
  videoNewsData,
}) => (
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

// Sample usage with fixed links (replace 123, 456 etc. with your actual document IDs)
const App: React.FC = () => {
  const videoNewsData: VideoNewsCardProps[] = [
    {
      imageUrl: BlogManagementImage,
      title: "ម៉ាឌ្រីដ ប៉ះ ដដមូនដ៍ក្នុងការប្រកួតដ៏រំភើប",
      description: "ការសង្គ្រោះបាល់ប៉េណាល់ទីរបស់ Raya គឺជារឿងអស្ចារ្យ!",
      link: "/blogs/123",
      profileName: "Chan Dara",
      profileRole: "Content Editor",
      profileImageUrl: "https://i.pravatar.cc/40?img=10",
    },
    {
      imageUrl: SponsoredPostsImage,
      title: "កម្មវិធី MST Story Night ទាក់ទាញយុវជនកម្ពុជា",
      description: "បទភ្លេង និងការរាំនាំអារម្មណ៍ខ្ពស់ជាមួយវីដេអូថ្មី។",
      link: "/news/2",
      profileName: "Sokha Lim",
      profileRole: "Music Producer",
      profileImageUrl: "https://i.pravatar.cc/40?img=20",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title: "រថយន្តធ្លាក់ចូលទន្លេក្រោយស្ពានរលំនៅវៀតណាម",
      description: "វីដេអូនាំឲ្យមានការពិភាក្សាខ្លាំង។",
      link: "/news/3",
      profileName: "Vuthy Chea",
      profileRole: "Reporter",
      profileImageUrl: "https://i.pravatar.cc/40?img=30",
    },
    {
      imageUrl: HobbyToBusinessImage,
      title: "សុផារិទ្ធ គុសុីម៉ា៖ ឧស្សាហកម្មវ័យក្មេងនាំមុខ",
      description: "អ្នកចាប់ផ្តើមវ័យក្មេងដែលមានអនាគតភ្លឺស្វាង។",
      link: "/news/4",
      profileName: "Channa Phan",
      profileRole: "Youth Entrepreneur",
      profileImageUrl: "https://i.pravatar.cc/40?img=40",
    },
  ];

  return <VideoNewsSection videoNewsData={videoNewsData} />;
};

export default App;
