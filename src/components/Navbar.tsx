import { useContext, useState, useRef, useEffect, ChangeEvent } from "react";
import LogoImage from "../assets/REACH-removebg-preview(1).png";
import { ThemeContext } from "../Layout/ThemeContext";
import UserProfileNav from "../components/UserNavigation";
import { Link } from "react-router";

interface NavItem {
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/"  },
  { name: "BLOG", link: "/productblog" },
];

const mockSuggestions: string[] = [
  "bed time stories",
  "funny stories",
  "adventure stories",
  "mystery stories",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar  be used outside a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string): void => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 bg-gray-400 dark:border-gray-500 dark:bg-gray-800 left-0 w-full  z-50  shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={LogoImage}
              alt="Logo"
              className="w-32 sm:w-40 lg:w-48 transition-all duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white focus:outline-none rounded-md z-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              <i
                className={`fas fa-bars absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              ></i>
              <i
                className={`fas fa-times absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              ></i>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex  items-center justify-end flex-1">
            <ul className="flex items-center me-7 gap-6 xl:gap-8">
              {NavItems.map((item, index) => (
                <li key={`nav-item-${index}`} className="relative text-blue-500">
                  <a
                    href={item.link}
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors duration-300 px-2 py-1"
                    aria-current={
                      item.link === window.location.pathname
                        ? "page"
                        : undefined
                    }
                  >
                    {item.name}
                  </a>
                  {index < NavItems.length - 1 && (
                    <span className="text-yellow-500 text-2xl font-bold mx-2">
                      {"|"}
                    </span>
                  )}
                </li>
              ))}
              {/* Search */}
              <li className="relative w-full max-w-[16rem] xl:max-w-[20rem]">
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <ul
                    id="search-suggestions"
                    className="absolute z-20 mt-2 w-full bg-gray-900 border border-[#FF0E4D]/20 rounded-lg shadow-xl max-h-64 overflow-auto"
                    role="listbox"
                  >
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm text-white hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                        onClick={() => handleSelectSuggestion(suggestion)}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          handleSelectSuggestion(suggestion)
                        }
                        role="option"
                        tabIndex={0}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-[#FF0E4D]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          {suggestion}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* Theme Toggle */}
              <li className="px-4">
                <div
                  className="relative inline-block w-14 h-7 mt-2 cursor-pointer overflow-hidden rounded-full"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      theme === "dark" ? "bg-blue-800" : "bg-gray-600"
                    }`}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-sm ${
                      theme === "dark" ? "translate-x-7" : "translate-x-1"
                    }`}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </li>
              {/* User Profile */}
              <li>
                <UserProfileNav />
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-pink-600 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex-1 space-y-6">
              {/* Mobile Search */}
              <div className="relative" ref={searchRef}>
                <input
                  type="search"
                  className="w-full bg-pink-600 border-2 border-yellow-500 text-white text-sm pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0E4D]/50 transition-all duration-300"
                  placeholder="Search..."
                  aria-label="Search site"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  role="combobox"
                  aria-expanded={showSuggestions}
                  aria-autocomplete="list"
                  aria-controls="search-suggestions-mobile"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 text-yellow-500 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </span>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <ul
                    id="search-suggestions-mobile"
                    className="absolute z-50 mt-2 w-full bg-gray-900 border border-[#FF0E4D]/20 rounded-lg shadow-xl max-h-64 overflow-auto"
                    role="listbox"
                  >
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm text-white hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                        onClick={() => handleSelectSuggestion(suggestion)}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          handleSelectSuggestion(suggestion)
                        }
                        role="option"
                        tabIndex={0}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-[#FF0E4D]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          {suggestion}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* User Profile for Mobile */}
              <div className="pt-4 border-t border-gray-700">
                <UserProfileNav isMobile={true} />
              </div>

              {/* Mobile Nav Items */}
              <ul className="space-y-4 pt-2">
                {NavItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-lg font-semibold text-white hover:text-[#FF0E4D] transition-colors duration-300 block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Toggle */}
            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Theme</span>
                <div
                  className="relative inline-block w-14 h-7 cursor-pointer overflow-hidden rounded-full"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      theme === "dark" ? "bg-blue-800" : "bg-gray-600"
                    }`}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-sm ${
                      theme === "dark" ? "translate-x-7" : "translate-x-1"
                    }`}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-30 lg:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
