import { motion } from "framer-motion";
import images from "../../../assets/blog.png";

function BlogManagementSection() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 mt-10 shadow-md rounded-lg">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 leading-snug">
            What is Blog Management?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Blog Management is a platform designed to help Publishers, Bloggers,
            and Website Owners monetize their blogs through guest posts. Earn
            money by publishing high-quality content submitted by clients, with
            instant payouts on submission of live URLs.
            <br /><br />
            Over the last two years, we've paid 40,000+ publishers over{" "}
            <span className="font-semibold text-green-600">$2 Million</span>,
            making us the largest and most trusted guest post platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-2.5 px-6 rounded-md font-medium border border-blue-600 hover:bg-blue-700 transition duration-300"
            >
              About Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-700 py-2.5 px-6 rounded-md font-medium border border-gray-400 hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src={images}
            alt="Blog Management Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BlogManagementSection;
