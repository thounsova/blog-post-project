import { motion } from "framer-motion";
import images from "../../../assets/background.png";

function BlogManagementSection() {
  return (
    <section className="bg-blue-50 py-10 px-4 md:px-8 mt-8 shadow-sm rounded-md">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Title */}
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
            Profile Title: Blog Manager
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-3 leading-snug">
            What is Blog Management?
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Blog Management helps Publishers, Bloggers, and Website Owners
            monetize their blogs through guest posts. Earn money by publishing
            high-quality content with instant payouts upon submission of live
            URLs.
            <br />
            <br />
            In the past two years, we've paid over{" "}
            <span className="font-semibold text-green-600">$2 Million</span> to
            more than 40,000 publishers.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src={images}
            alt="Blog Management Illustration"
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BlogManagementSection;
