import SocialIconsFooter from "./socialiconsFooter/socialiconsFooter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-[100px] text-white px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
     <li>
                <a href="#" className="hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get exclusive offers & news straight to your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm text-gray-900 rounded-md focus:outline-none"
              />
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 YourStore. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <SocialIconsFooter />
          </div>
        </div>
      </div>
    </footer>
  );
}
