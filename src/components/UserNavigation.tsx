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
    if (userData) {
      localStorage.removeItem("userData");
      setUserData(null);
      setDropdownOpen(false);
      navigate("/"); // Navigate to home after logout
    }
  };

  const handleMyFavorite = () => {
    navigate("/favorite");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Mobile version (Small screen optimized, no rounded corners)
  if (isMobile) {
    return userData && userData.isLoggedIn ? (
      <div className="p-2 bg-gray-100 shadow-sm">
        <div className="flex items-center space-x-2 text-green-700">
          <span className="text-sm font-semibold truncate max-w-[100px]">
            {userData.fullName || userData.email.split("@")[0]}
          </span>
          <div className="flex space-x-1">
            <button
              onClick={handleMyFavorite}
              className="px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-200"
            >
              Favorites
            </button>
            <button
              onClick={handleLogout}
              className="px-2 py-1 text-xs text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex space-x-2">
        <Link to="/login">
          <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 focus:ring-1 focus:ring-blue-300 focus:outline-none transition-colors duration-200 py-1 px-2 text-sm font-semibold shadow-sm border border-blue-200">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors duration-200 py-1 px-2 text-sm font-semibold shadow-sm">
            Register
          </button>
        </Link>
      </div>
    );
  }

  // Desktop version (no rounded corners)
  return (
    <li className="relative">
      {userData && userData.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center px-3 py-2 text-white bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-200 text-sm"
          >
            <span className="font-semibold truncate max-w-[120px]">
              {userData.fullName || userData.email.split("@")[0]}
            </span>
            <svg
              className="w-4 h-4 ml-2 text-green-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">User menu</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 py-1 z-10 bg-white shadow-lg border border-gray-200">
              <div className="px-3 py-2 text-sm  truncate">
                <p className="font-medium truncate">
                  {userData.fullName || userData.email.split("@")[0]}
                </p>
              </div>
              <button
                onClick={handleMyFavorite}
                className="block w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              >
                Favorites
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              >
                Log Out
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex space-x-1">
          <Link to="/login">
            <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 focus:ring-1 focus:ring-blue-300 focus:outline-none transition-colors duration-200 py-2 px-3 text-sm font-semibold shadow-sm border border-blue-200">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 focus:ring-1 focus:ring-indigo-300 focus:outline-none transition-colors duration-200 py-2 px-3 text-sm font-semibold shadow-sm">
              Register
            </button>
          </Link>
        </div>
      )}
    </li>
  );
}
