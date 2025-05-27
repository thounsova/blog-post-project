import React, { useState } from "react";
import { User, Link, MessageCircle, PlayCircle } from "lucide-react";

const InstagramProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleFollowToggle = () => setIsFollowing(!isFollowing);

  const profileData = {
    username: "insider",
    name: "Insider",
    followers: "2.4M",
    following: "96",
    posts: "5,067",
    bio: "What you want to know.",
    website: "https://www.insider.com",
  };

  const storyHighlights = [
    {
      id: "1",
      title: "Urban Future",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "2",
      title: "Queen's Men",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "3",
      title: "Congress",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "4",
      title: "COVID Q&A",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "5",
      title: "Battle Royal",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "6",
      title: "Myanmar",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
    {
      id: "7",
      title: "James Chin",
      image: "https://placehold.co/100x100/EEE/31343C",
    },
  ];

  const posts = [
    { id: "1", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "2", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "3", type: "reel", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "4", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "5", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "6", type: "reel", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "7", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "8", type: "post", image: "https://placehold.co/300x300/EEE/31343C" },
    { id: "9", type: "reel", image: "https://placehold.co/300x300/EEE/31343C" },
  ];

  return (
    <div className="min-h-screen mt-10 bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-10">
        {/* Top Header */}
        <header className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <User className="w-12 h-12 rounded-full bg-gray-300 p-2 text-gray-600" />
            <div>
              <h1 className="text-2xl font-semibold">{profileData.username}</h1>
              <p className="text-gray-500 text-sm">{profileData.name}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 font-bold text-xl">
            ...
          </button>
        </header>

        {/* Main Profile Section */}
        <section className="flex flex-col sm:flex-row gap-8 mt-8">
          {/* Left: Profile Photo & Stats */}
          <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-1/3">
            <User className="w-36 h-36 rounded-full bg-gray-300 p-6 text-gray-600" />
            <div className="flex justify-between w-full text-center text-gray-700 font-semibold">
              <div>
                <div className="text-xl">{profileData.posts}</div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div>
                <div className="text-xl">{profileData.followers}</div>
                <div className="text-sm text-gray-500">Followers</div>
              </div>
              <div>
                <div className="text-xl">{profileData.following}</div>
                <div className="text-sm text-gray-500">Following</div>
              </div>
            </div>
            <button
              onClick={handleFollowToggle}
              className={`w-full py-2 rounded-md font-semibold transition-colors ${
                isFollowing
                  ? "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="w-full py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Message
            </button>
          </div>

          {/* Right: Bio, Website, Story Highlights */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-900 text-lg mb-2">{profileData.bio}</p>
            {profileData.website && (
              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-2"
              >
                <Link className="w-5 h-5" /> {profileData.website}
              </a>
            )}

            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-2">
                Story Highlights
              </h2>
              <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {storyHighlights.map(({ id, title, image }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center text-center min-w-[72px]"
                  >
                    <img
                      src={image}
                      alt={title}
                      className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                    />
                    <p className="text-xs mt-1 text-gray-600 truncate w-full">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <nav className="flex justify-center mt-10 border-t border-gray-200">
          {["posts", "reels", "tagged"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center font-semibold transition-colors ${
                activeTab === tab
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Posts Grid */}
        <section className="grid grid-cols-3 gap-2 mt-4">
          {posts
            .filter(
              (post) =>
                activeTab === "posts" ||
                (activeTab === "reels" && post.type === "reel") ||
                activeTab === "tagged"
            )
            .map(({ id, image, type }) => (
              <div
                key={id}
                className="relative w-full aspect-square rounded overflow-hidden bg-gray-200"
              >
                <img
                  src={image}
                  alt={`Post ${id}`}
                  className="object-cover w-full h-full"
                />
                {type === "reel" && (
                  <PlayCircle className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                )}
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default InstagramProfile;
