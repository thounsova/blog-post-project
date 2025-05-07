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

  // Load user data on component mount
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

  // Handle logout
  const handleLogout = () => {
    if (userData) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...userData,
          isLoggedIn: false,
        })
      );

      // Clear user data from state
      setUserData(null);

      // Close dropdown if open
      setDropdownOpen(false);

      // Navigate to login page
      navigate("/login");
    }
  };

  // Hangle My Favorite
  const handleMyFavorite = () => {
    if (userData) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...userData,
          isLoggedIn: false,
        })
      );

      // Close dropdown if open
      setDropdownOpen(false);

      // Navigate to login page
      navigate("/favorite");
    }
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Mobile version of user navigation
  if (isMobile) {
    return userData && userData.isLoggedIn ? (
      <div className="block">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-8 h-8 rounded-full bg-[#FF0E4D] flex items-center justify-center text-white font-bold">
            {userData.fullName
              ? userData.fullName.charAt(0).toUpperCase()
              : userData.email.charAt(0).toUpperCase()}
          </div>
          <span className="text-lg truncate max-w-[150px]">
            {userData.fullName || userData.email.split("@")[0]}
          </span>
          {/* call to action */}
          <button
            onClick={handleMyFavorite}
            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            My Favorite
          </button>
          <button
            onClick={handleLogout}
            className="ml-2 text-sm text-gray-300 hover:text-[#FF0E4D]"
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      <Link to="/register" className="block">
        <button className="flex items-center space-x-3 text-white hover:text-[#FF0E4D] transition-colors duration-300">
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

  // Desktop version of user navigation
  return (
    <li className="relative">
      {userData && userData.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF0E4D]"
          >
            <div className="w-6 h-6 rounded-full bg-[#FF0E4D] flex items-center justify-center text-white font-bold">
              {userData.fullName
                ? userData.fullName.charAt(0).toUpperCase()
                : userData.email.charAt(0).toUpperCase()}
            </div>
            <span className="sr-only">User menu</span>
          </button>

          {/* Dropdown menu */}
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
              {/* call to action */}
              <button
                onClick={handleMyFavorite}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
              >
                My Favorite
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <Link to="/register">
          <button className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF0E4D]">
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
