import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Info, Phone } from "lucide-react";
import LogoImage from "../assets/mmmm.png";
import { ThemeContext } from "../Layout/ThemeContext";
import UserProfileNav from "../components/UserNavigation";

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/", icon: <Home className="w-6 h-6" /> },
  {
    name: "BLOG",
    link: "/productblog",
    icon: <FileText className="w-6 h-6" />,
  },
  { name: "ABOUT", link: "/productblog", icon: <Info className="w-6 h-6" /> },
  { name: "CONTACT", link: "/contact", icon: <Phone className="w-6 h-6" /> },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={LogoImage} alt="Logo" className="h-[50px]" />
          <h1 className="text-xl font-semibold text-blue-500 hover:text-green-700 transition duration-300">
            beatleap
          </h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-blue-500 rounded-md hover:bg-gray-300 transition"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="flex flex-col items-center text-gray-800 hover:text-blue-600 transition group"
            >
              <div className="p-2 rounded-full group-hover:bg-blue-100">
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 w-10 h-10 flex flex-col items-center justify-center rounded-full hover:bg-blue-100 transition"
          >
            <div className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</div>
          </button>
          

          <UserProfileNav />
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="flex flex-col-12 items-center text-gray-800 hover:text-blue-600 transition group"
            >
              <div className="p-3 rounded-full group-hover:bg-blue-100">
                {item.icon}
              </div>
              <span className="text-xs mt-2">{item.name}</span>
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="flex flex-col-12 items-center mt-6">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-100 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <span className="text-xs mt-1">Theme</span>
          </div>

          <UserProfileNav isMobile={true} />
        </div>
      </div>

      {/* Overlay to close the mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
