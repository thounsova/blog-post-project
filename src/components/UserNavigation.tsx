import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfileNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState(() => {
    const data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : null;
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(
          "http://localhost:1337/api/users/me?populate=avatar",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();

        let avatarUrl = null;
        if (Array.isArray(data.avatar) && data.avatar.length > 0) {
          avatarUrl = data.avatar[0].url
            ? data.avatar[0].url.startsWith("http")
              ? data.avatar[0].url
              : `http://localhost:1337${data.avatar[0].url}`
            : null;
        }

        const userPayload = {
          ...data,
          avatarUrl,
          isLoggedIn: true,
        };

        setUserData(userPayload);
        localStorage.setItem("userData", JSON.stringify(userPayload));
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUserData(null);
        localStorage.removeItem("userData");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const onStorageChange = () => {
      const data = localStorage.getItem("userData");
      setUserData(data ? JSON.parse(data) : null);
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };

  const handleCreateBlog = () => {
    setDropdownOpen(false);
    navigate("/create-blog");
  };

  const handleChangeAccount = () => {
    setDropdownOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayName = userData?.email || "User";
  const avatarUrl = userData?.avatarUrl;

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      {userData?.isLoggedIn ? (
        <>
          <button
            onClick={toggleDropdown}
            aria-label="User menu"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition overflow-hidden"
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-10 h-10 object-cover rounded-full"
              />
            ) : (
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
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b truncate">
                {displayName}
              </div>

              <Link
                to={`/profile/${userData?.username || ""}`}
                className="block px-4 py-2 text-sm text-left text-indigo-700 font-medium hover:underline"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
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
        <div>
          <Link
            to="/login"
            className="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfileNav;
