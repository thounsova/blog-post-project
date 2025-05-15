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
  { name: "Home", link: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Blog", link: "/productblog", icon: <FileText className="w-5 h-5" /> },
  { name: "About", link: "/about", icon: <Info className="w-5 h-5" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="w-5 h-5" /> },
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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={LogoImage} alt="Logo" className="h-10" />
            <h1 className="text-2xl font-bold text-blue-600 hover:text-green-600 transition-colors">beatleap</h1>
          </Link>

          {/* Mobile Profile Icon */}
          <div className="lg:hidden">
            <UserProfileNav />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center text-sm ${
                  location.pathname === item.link ? "text-blue-600" : "text-gray-600"
                } hover:text-blue-600 transition`}
              >
                <div className="p-2 rounded-full group-hover:bg-blue-100">
                  {item.icon}
                </div>
                <span className="mt-1">{item.name}</span>
              </Link>
            ))}
            <UserProfileNav />
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner lg:hidden z-50">
        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Left Nav Items */}
          <div className="flex gap-[60px]">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center text-sm ${
                  location.pathname === item.link ? "text-purple-600" : "text-gray-500"
                } hover:text-purple-600 transition`}
              >
                {item.icon}
                <span className="mt-1">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Center Profile Button */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Link
              to="/profile"
              className={`w-14 h-14 flex items-center justify-center rounded-full border text-sm shadow-md transition
                ${
                  location.pathname === "/profile"
                    ? "bg-purple-100 border-purple-500 text-purple-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-100"
                }`}
              aria-label="Profile"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Nav Items */}
          <div className="flex gap-[60px]">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex flex-col items-center text-sm ${
                  location.pathname === item.link ? "text-purple-600" : "text-gray-500"
                } hover:text-purple-600 transition`}
              >
                {item.icon}
                <span className="mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
