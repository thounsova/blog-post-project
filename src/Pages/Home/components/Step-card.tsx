import React from 'react';
import { motion } from 'framer-motion';
import Images from "../../../assets/so.webp";
import Image from "../../../assets/po.webp";
import Imag from "../../../assets/spo.webp";
import Logo from "../../../assets/logo-ghost-tequila.jpg";

// Array of logo objects
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

const SupportersSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-900 to-indigo-900 py-16 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Supporters</h2>
          <h3 className="text-xl font-medium mb-6">SPONSORS & PARTNERS</h3>
          <p className="text-lg mb-4">
            Generous Season and Program Support Provided By:
          </p>
          <div className="mb-10">
            <p className="text-md italic">
              The Harriet Wyche Endowment Fund | The Jean T. and Heyward G. Pelham Foundation
            </p>
          </div>

          {/* Supporter Logo Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {supporterLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 ease-in-out flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <div className="mt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-md shadow-lg transform transition duration-300 ease-in-out"
        >
          View All Posts
        </motion.button>
      </div>
    </>
  );
};

export default SupportersSection;
