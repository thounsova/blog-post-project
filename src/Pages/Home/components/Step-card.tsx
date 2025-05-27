import React from "react";
import { motion } from "framer-motion";
import Images from "../../../assets/so.webp";
import Image from "../../../assets/po.webp";
import Imag from "../../../assets/spo.webp";
import Logo from "../../../assets/logo-ghost-tequila.jpg";

const supporterLogos = [
  { src: Imag, alt: "Community Foundation of Greenville" },
  { src: Image, alt: "The Graham Foundation" },
  { src: Images, alt: "Greenville Women Giving" },
  { src: Images, alt: "Jolley Foundation" },
  { src: Logo, alt: "Metropolitan Arts Council" },
  { src: Logo, alt: "South Carolina Arts Commission" },
  { src: Logo, alt: "The Shubert Foundation" },
  { src: Logo, alt: "Charitable Foundation" },
];

const SupportersSection = () => (
  <>
    <section className="bg-gradient-to-b from-blue-500 to-indigo-400 py-12 text-white text-center">
      <div className="max-w-5xl mx-auto px-3">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Supporters</h2>
        <h3 className="text-lg font-medium mb-4">SPONSORS & PARTNERS</h3>
        <p className="text-base mb-3">
          Generous Season and Program Support Provided By:
        </p>
        <p className="text-sm italic mb-8">
          The Harriet Wyche Endowment Fund | The Jean T. and Heyward G. Pelham
          Foundation
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {supporterLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center transition duration-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div className="mt-8 flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md transition duration-200"
      >
        View All Posts
      </motion.button>
    </div>
  </>
);

export default SupportersSection;
