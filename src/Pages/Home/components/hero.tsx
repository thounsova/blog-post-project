import React, { useState } from "react";
import { motion } from "framer-motion"; // 👈 Import framer-motion

import Images from "../../../assets/you.png";

const HeroWithCards: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignUpClick = () => {
    alert(`Signing up with email: ${email}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20 mt-[80px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Get Paid{" "}
              <span className="text-blue-600">
                by Selling Guest Posts & Publishing Content
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join thousands of bloggers on Blog Management by publishing
              high-quality content and earning handsomely. Sign up now and start
              making money today!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="flex-1 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-2.5 px-4 text-sm"
              />
              <button
                onClick={handleSignUpClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-md transition duration-300 text-sm w-full sm:w-auto"
              >
                Sign Up Now
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={Images}
              alt="Person with laptop"
              className="w-full max-w-[250px] md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
    </>
  );
};

export default HeroWithCards;
