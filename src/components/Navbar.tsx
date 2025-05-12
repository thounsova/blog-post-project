import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Info, Phone, User } from "lucide-react";
import { ThemeContext } from "../Layout/ThemeContext";
import LogoImage from "../assets/mmmm.png";
import UserProfileNav from "../components/UserNavigation";

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { name: "Home", link: "/", icon: <Home className="w-6 h-6" /> },
  {
    name: "Blog",
    link: "/productblog",
    icon: <FileText className="w-6 h-6" />,
  },
  { name: "About", link: "/about", icon: <Info className="w-6 h-6" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="w-6 h-6" /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider.");
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LogoImage} alt="Logo" className="h-[50px]" />
              <h1 className="text-xl font-semibold text-blue-500 hover:text-green-700 transition">
                beatleap
              </h1>
            </Link>

            {/* Mobile Profile Icon */}
            <button
              className="lg:hidden flex items-center justify-center rounded-full hover:bg-blue-100 transition"
              aria-label="Profile Menu"
            >
              <UserProfileNav />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link ? "text-blue-600" : ""
                } hover:text-blue-600 transition group`}
              >
                <div className="p-2 rounded-full group-hover:bg-blue-100">
                  {item.icon}
                </div>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}

            {/* Theme Toggle */}

            <UserProfileNav />
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner lg:hidden z-50">
        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Left Items */}
          <div className="flex gap-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link
                    ? "text-purple-600"
                    : "text-gray-500"
                } hover:text-purple-600 transition duration-200`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Center Profile Button */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Link
              to="/profile"
              className={`w-16 h-16 flex items-center justify-center ${
                location.pathname === "/profile"
                  ? "bg-purple-100 border border-purple-400 text-purple-600"
                  : "bg-white border border-gray-300 text-gray-500"
              } rounded-full shadow-lg hover:bg-purple-200 hover:border-purple-400 hover:text-purple-700 transition duration-200`}
              aria-label="Profile"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Items */}
          <div className="flex gap-8">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center ${
                  location.pathname === item.link
                    ? "text-purple-600"
                    : "text-gray-500"
                } hover:text-purple-600 transition duration-200`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
