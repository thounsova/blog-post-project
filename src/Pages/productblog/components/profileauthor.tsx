import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { LucideLink, MessageCircle } from "lucide-react";
import parse from "html-react-parser";

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
  const [userData, setUserData] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "tagged">(
    "posts"
  );

  useEffect(() => {
    const fetchUserAndBlogs = async () => {
      try {
        const resUser = await axios.get(
          "http://localhost:1337/api/users?populate=avatar"
        );
        const users = resUser.data.data || resUser.data;
        const user = users.find((u: User) => u.username === username) ?? null;
        setUserData(user);

        if (user) {
          const resBlogs = await axios.get(
            `http://localhost:1337/api/blogs?filters[author][username][$eq]=${username}&populate=image`
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
          setUserData((prev) => (prev ? { ...prev, blogs: blogsData } : null));
        }
      } catch (err) {
        console.error("Error fetching user/blogs:", err);
      }
    };

    if (username) fetchUserAndBlogs();
  }, [username]);

  if (!userData)
    return <div className="text-center mt-10">Loading user profile...</div>;

  const avatarUrl = userData.avatar?.[0]?.url?.startsWith("http")
    ? userData.avatar[0].url
    : userData.avatar?.[0]
    ? `http://localhost:1337${userData.avatar[0].url}`
    : "https://placehold.co/150x150?text=Avatar";

  // Prepare posts array with needed fields
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
            <p className="text-lg leading-relaxed">Welcome to my blog!</p>
          )}
        </div>

        {/* Tabs */}
        <nav className="mt-10 border-b border-gray-300 flex justify-center gap-10 text-sm font-semibold text-gray-600">
          <button
            onClick={() => setActiveTab("posts")}
            className={`pb-3 ${
              activeTab === "posts"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "hover:text-indigo-600"
            }`}
          >
            Posts
          </button>
          {/* Add other tabs if needed */}
        </nav>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {posts.map((post) => {
            const imageUrl = post.image;
            const avatarUrl = post.author?.avatar?.[0]?.url?.startsWith("http")
              ? post.author.avatar[0].url
              : post.author?.avatar?.[0]
              ? `http://localhost:1337${post.author.avatar[0].url}`
              : "https://placehold.co/40x40?text=Avatar";

            return (
              <Link
                to={`/blog/${post.documentId}`}
                key={post.id}
                className="relative block group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={imageUrl}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg truncate">
                    {post.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;
