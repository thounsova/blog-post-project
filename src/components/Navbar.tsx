import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Info,
  Phone,
 
} from "lucide-react"; // Let's import the icons we need
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import LogoImage from "../assets/mmmm.png";
import { ThemeContext } from "../Layout/ThemeContext";
import UserProfileNav from "../components/UserNavigation";

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

// Updated NavItems to match the bottom nav in your image
const NavItems: NavItem[] = [
  { name: "Home", link: "/", icon: <Home className="w-6 h-6" /> },
  { name: "Blog", link: "/blog", icon: <FileText className="w-6 h-6" /> },
  { name: "About", link: "/about", icon: <Info className="w-6 h-6" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="w-6 h-6" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error("Navbar must be used inside ThemeProvider");
  const { theme, toggleTheme } = themeContext;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-lg md:shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo + Mobile Theme Toggle */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LogoImage} alt="Logo" className="h-[50px]" />
              <h1 className="text-xl font-semibold text-blue-500 hover:text-green-700 transition duration-300">
                beatleap
              </h1>
            </Link>

            {/* Mobile Theme Toggle Button (can be removed if you only want it in the desktop nav) */}
            <button
              className="lg:hidden   flex items-center justify-center rounded-full hover:bg-blue-100 transition"
            >
                       <UserProfileNav />

            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition group`}
              >
                <div className="p-2 rounded-full group-hover:bg-blue-100">{item.icon}</div>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 flex items-center shadow-lg justify-center rounded-full hover:bg-blue-100 transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <MoonIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <SunIcon className="w-6 h-6 text-yellow-500" />
              )}
            </button>
            <UserProfileNav />
          </nav>
        </div>

        {/* Overlay for mobile menu (not used here but kept for future support) */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 lg:hidden"
          ></div>
        )}
      </header>

      {/* Bottom Mobile Navigation */}
        {/* Bottom Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner lg:hidden z-50">
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex justify-around w-full py-2">
            {NavItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link ? "text-purple-600" : "text-gray-500"
                } hover:text-purple-600 transition`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}

            <div className="w-16 h-16 opacity-0 pointer-events-none" />

            {NavItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link ? "text-purple-600" : "text-gray-500"
                } hover:text-purple-600 transition`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Central Theme Toggle Button */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
            <button
              onClick={toggleTheme}
              className="w-full h-full flex items-center justify-center rounded-full focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <MoonIcon className="w-8 h-8 text-white" />
              ) : (
                <SunIcon className="w-8 h-8 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}



