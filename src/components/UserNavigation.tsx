import { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleChangeAccount = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleCreateBlog = () => {
    navigate("/create-blog");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const displayName = userData?.email;

  // ✅ Mobile Version
  if (isMobile) {
    return userData?.isLoggedIn ? (
      <div className="px-3 py-2 bg-gray-100 shadow-sm rounded-md flex items-center justify-between">
        <span className="text-sm font-medium text-green-700 truncate max-w-[120px]">
          {displayName}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleCreateBlog}
            className="px-3 py-1 text-xs font-medium text-white bg-green-500 hover:bg-green-600 rounded focus:ring-2 focus:ring-green-300 transition"
          >
            Create Blog
          </button>
          <Link to="/profile">
            <button className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition">
              Profile
            </button>
          </Link>
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

  // ✅ Desktop Version
  return (
    <div className="relative ml-4" ref={dropdownRef}>
      {userData?.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            aria-label="User menu"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          >
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b truncate">
                {displayName}
              </div>
              <Link to="/profile">
                <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition">
                  Profile
                </button>
              </Link>
              <button
                onClick={handleCreateBlog}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition"
              >
                Create Blog
              </button>
              <button
                onClick={handleChangeAccount}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition"
              >
                Change Account
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100 transition"
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
