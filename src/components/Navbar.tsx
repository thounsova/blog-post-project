import { useContext, useState } from "react";
import LogoImage from "../assets/logonew.png";
import { ThemeContext } from "../Layout/ThemeContext";
import UserProfileNav from "../components/UserNavigation";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/" },
  { name: "BLOG", link: "/productblog" },
  { name: "ABOUT", link: "/productblog" },
  { name: "CONTACT", link: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Navbar must be used inside ThemeProvider");

  const { theme, toggleTheme } = themeContext;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-lg md:shadow-xl transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={LogoImage} alt="Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md bg-gray-700 text-blue-500 transition-all hover:bg-gray-600"
        >
          {isOpen ? (
            <svg
              className="h-6 text-blue-700 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 font-sans">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-sm text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-colors hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* User Profile */}
          <UserProfileNav />
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-xs text-gray-700 dark:text-gray-300">
              Theme
            </span>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-300 dark:bg-gray-700 text-black dark:text-white transition-colors hover:bg-blue-400 dark:hover:bg-gray-600"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>

          {/* User Profile */}
          <UserProfileNav isMobile={true} />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
