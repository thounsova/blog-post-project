import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// User data interface
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
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...userData,
          isLoggedIn: false,
        })
      );
      setUserData(null);
      setDropdownOpen(false);
      navigate("/login");
    }
  };

  const handleMyFavorite = () => {
    if (userData) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...userData,
          isLoggedIn: false,
        })
      );
      setDropdownOpen(false);
      navigate("/favorite");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Mobile version
  if (isMobile) {
    return userData && userData.isLoggedIn ? (
      <div className="block">
        <div className="flex items-center space-x-3 text-green-600">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
            {userData.fullName
              ? userData.fullName.charAt(0).toUpperCase()
              : userData.email.charAt(0).toUpperCase()}
          </div>
          <span className="text-lg truncate max-w-[150px]">
            {userData.fullName || userData.email.split("@")[0]}
          </span>
          <button
            onClick={handleMyFavorite}
            className="block w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-700 hover:text-white transition"
          >
            My Favorite
          </button>
          <button
            onClick={handleLogout}
            className="ml-2 text-sm text-green-600 hover:text-green-800 transition"
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      <Link to="/register" className="block">
        <button className="flex items-center space-x-3 text-green-600 hover:text-green-400 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 h-5 fill-current"
            aria-hidden="true"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
          <span className="text-lg">Login</span>
        </button>
      </Link>
    );
  }

  // Desktop version
  return (
    <li className="relative">
      {userData && userData.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
              {userData.fullName
                ? userData.fullName.charAt(0).toUpperCase()
                : userData.email.charAt(0).toUpperCase()}
            </div>
            <span className="sr-only">User menu</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 text-sm text-white border-b border-gray-700">
                <p className="font-medium truncate">
                  {userData.fullName || userData.email.split("@")[0]}
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {userData.email}
                </p>
              </div>
              <button
                onClick={handleMyFavorite}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-green-700 transition"
              >
                My Favorite
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-green-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <Link to="/register">
          <button className="text-blue-500 p-2 rounded-full hover:bg-blue-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 fill-current"
              aria-hidden="true"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
            <span className="sr-only">User account</span>
          </button>
        </Link>
      )}
    </li>
  );
}
