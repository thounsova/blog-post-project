import images from "../../../assets/blog.png";

function BlogManagementSection() {
  return (
    <div className="bg-blue-100 py-12 px-4 md:px-12 mt-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 shadow-lg">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
          What is Blog Management?
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Blog Management is a platform that helps Publishers, Bloggers, and
          Website Owners monetize their blog. The platform supports earning
          money by publishing Guest Posts. Publishers receive regular orders
          with high-quality content and instant payment upon submission of a
          live URL. In the last two years, Blog Management has paid 40,000+
          Publishers over $2 Million—making it the biggest and most profitable
          guest post platform.
        </p>
        <div className="mt-6 flex flex-col-12 sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
            About Us
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={images}
          alt="Blog Management Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
        />
      </div>
    </div>
  );
}

export default BlogManagementSection;
