import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserData {
  email: string;
  fullName?: string;
  isLoggedIn: boolean;
  loginTime: number;
}

export default function UserProfileNav({ isMobile = false }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData.isLoggedIn) {
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleMyFavorite = () => {
    navigate("/favorite");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const displayName = userData?.fullName || userData?.email.split("@")[0];

  // ✅ Mobile version
  if (isMobile) {
    return userData?.isLoggedIn ? (
      <div className="px-3 py-2 bg-gray-100 shadow-sm rounded-md flex items-center justify-between">
        <span className="text-sm font-medium text-green-700 truncate max-w-[120px]">
          {displayName}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleMyFavorite}
            className="px-3 py-1 text-xs font-medium text-white bg-green-500 hover:bg-green-600 rounded focus:ring-2 focus:ring-green-300 transition"
          >
            Favorites
          </button>
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-xs font-medium text-white bg-red-500 hover:bg-red-600 rounded focus:ring-2 focus:ring-red-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      <div className="flex gap-2">
        <Link to="/login">
          <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded shadow-sm transition">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm transition">
            Register
          </button>
        </Link>
      </div>
    );
  }

  // ✅ Desktop version
  return (
    <div className="relative ml-4">
      {userData?.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded focus:ring-2 focus:ring-green-300 transition"
          >
            <span className="truncate max-w-[140px]">{displayName}</span>
            <svg
              className="w-4 h-4 ml-2 text-green-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b truncate">
                {displayName}
              </div>
              <button
                onClick={handleMyFavorite}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition"
              >
                Favorites
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition"
              >
                Log Out
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-2">
          <Link to="/login">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded shadow-sm transition">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded shadow-sm transition">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
