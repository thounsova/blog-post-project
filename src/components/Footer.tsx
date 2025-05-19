import SocialIconsFooter from "./socialiconsFooter/socialiconsFooter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-[30px] text-white px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">About</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Blog Management connects publishers and advertisers. Publishers
              can earn through guest posts by listing their sites and setting
              their prices.
            </p>
          </div>

          {/* Company */}
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
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Blog Management. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <SocialIconsFooter />
          </div>
        </div>
      </div>
    </footer>
  );
}
