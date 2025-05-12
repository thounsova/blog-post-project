import SocialIconsFooter from "./socialiconsFooter/socialiconsFooter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-[100px] text-white px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-10">
          <div className="ml-15 max-sm:ml-20">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">About</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Blog Management is a platform that connects Publishers with
                  Advertisers. It is a Publishing and Pay model that ensures
                  regular guest posting orders for publishers. Publishers can
                  add their websites to the Blog Management database and set
                  their prices.
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-30 max-sm:ml-20">
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

          <div className="ml-25 max-sm:ml-20">
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
