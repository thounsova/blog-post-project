import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

interface Blog {
  id: number;
  documentId?: string;
  title: string;
  content?: string;
  createdAt?: string;
  publishedAt?: string;
  image?: {
    url: string;
  }[];
}

interface User {
  id: number;
  username: string;
  about?: string;
  avatar?: {
    url: string;
  }[];
  blogs?: Blog[];
}

const InstagramProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  // Get logged-in user from localStorage
  const loggedInUserData = localStorage.getItem("userData");
  const loggedInUser = loggedInUserData ? JSON.parse(loggedInUserData) : null;

  // If no username param and no logged-in user, redirect to login
  useEffect(() => {
    if (!username && !loggedInUser) {
      navigate("/login");
    }
  }, [username, loggedInUser, navigate]);

  // Use username from param or logged-in user’s username
  const profileUsername = username || loggedInUser?.fullName;

  const [userData, setUserData] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "tagged">(
    "posts"
  );

  useEffect(() => {
    const fetchUserAndBlogs = async () => {
      if (!profileUsername) return;

      try {
        // Fetch user by username with avatar populated
        const resUser = await axios.get(
          `http://localhost:1337/api/users?filters[username][$eq]=${profileUsername}&populate=avatar`
        );

        const users = resUser.data.data || resUser.data;
        const user = users.length > 0 ? users[0] : null;

        if (!user) {
          setUserData(null);
          return;
        }

        // Fetch blogs for that user with images populated
        const resBlogs = await axios.get(
          `http://localhost:1337/api/blogs?filters[author][username][$eq]=${profileUsername}&populate=image`
        );

        const blogsData = resBlogs.data.data.map((b: any) => ({
          id: b.id,
          documentId: b.documentId || b.id.toString(),
          title: b.title,
          content: b.content,
          createdAt: b.createdAt,
          publishedAt: b.publishedAt,
          image:
            b.image?.map((img: any) => ({
              url: img.url.startsWith("http")
                ? img.url
                : `http://localhost:1337${img.url}`,
            })) ?? [],
        }));

        setUserData({
          ...user,
          blogs: blogsData,
        });
      } catch (err) {
        console.error("Error fetching user/blogs:", err);
      }
    };

    fetchUserAndBlogs();
  }, [profileUsername]);

  if (!userData)
    return (
      <div className="text-center mt-10 text-white">
        Loading user profile...
      </div>
    );

  const avatarUrl = userData.avatar?.[0]?.url?.startsWith("http")
    ? userData.avatar[0].url
    : userData.avatar?.[0]
    ? `http://localhost:1337${userData.avatar[0].url}`
    : "https://placehold.co/150x150?text=Avatar";

  const posts =
    userData.blogs?.map((blog) => ({
      id: blog.id.toString(),
      documentId: blog.documentId || blog.id.toString(),
      title: blog.title,
      content: blog.content,
      author: userData,
      date: blog.publishedAt || blog.createdAt || "",
      image:
        blog.image?.[0]?.url ??
        `https://placehold.co/300x300?text=${encodeURIComponent(blog.title)}`,
    })) ?? [];

  return (
    <div className="min-h-screen mt-17 bg-gray-900 py-10 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-md shadow-lg p-8">
        {/* Profile Header: Centered */}
        <div className="flex flex-col items-center border-b pb-6">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
          />
          <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
            {userData.username}
          </h1>
          <div className="flex justify-center gap-12 mt-6 border-b pb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {posts.length}
              </div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">1.2K</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">100</div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-8 py-3 rounded-md font-semibold text-sm transition ${
                isFollowing
                  ? "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="px-8 py-3 border border-indigo-600 rounded-md text-indigo-600 hover:bg-indigo-50 font-semibold text-sm flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 text-center max-w-3xl mx-auto text-gray-700">
          {userData.about ? (
            <p className="text-lg leading-relaxed">{userData.about}</p>
          ) : (
            <p className="text-sm italic text-gray-400">No bio available.</p>
          )}
        </div>

        {/* Tabs */}
        <div className="mt-10 border-t">
          <div className="flex justify-center border-b">
            {["posts", "reels", "tagged"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-semibold text-sm transition ${
                  activeTab === tab
                    ? "border-b-4 border-indigo-600 text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {activeTab === "posts" && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {posts.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">
                  No posts yet.
                </div>
              ) : (
                posts.map((post) => (
                  <Link
                    to={`/blog/${post.documentId}`}
                    key={post.id}
                    className="relative group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-square w-full object-cover rounded-md transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                      View Post
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}

          {/* Reels Tab Placeholder */}
          {activeTab === "reels" && (
            <div className="mt-8 text-center text-gray-600">
              Reels content not implemented yet.
            </div>
          )}

          {/* Tagged Tab Placeholder */}
          {activeTab === "tagged" && (
            <div className="mt-8 text-center text-gray-600">
              Tagged content not implemented yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;
