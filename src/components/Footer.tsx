import SocialIconsFooter from "./socialiconsFooter/socialiconsFooter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-[120px] px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between ml-[130px] gap-10 mb-12">
          
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-base font-semibold mb-4 text-teal-400">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Blog Management connects publishers with advertisers through a publishing and pay model. Publishers can add their websites to our database and set their own pricing.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] ml-[100px]">
            <h3 className="text-base font-semibold mb-4 text-teal-400">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mr-[150px]">
            <h3 className="text-base font-semibold mb-4 text-teal-400">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 YourStore. All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <SocialIconsFooter />
          </div>
        </div>
      </div>
    </footer>
  );
}
