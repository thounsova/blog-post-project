import React, { useState } from "react";
import Images from "../../../assets/you.png";

interface Props {}

const Hero: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignUpClick = () => {
    console.log("Signing up with email:", email);
    alert(`Signing up with email: ${email}`);
  };

  return (
    <section className=" py-16 mt-[80px] md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-[100px] lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight relative inline-block">
            Get Paid{" "}
            <span className="absolute bottom-1 left-0 w-1/3 h-2 z-[-1]"></span>
            by Selling Guest Posts & Publishing Content
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Join thousands of bloggers on Blog Management by publishing
            high-quality content and earning handsomely. Sign up now and start
            making money today!
          </p>
          <div className="mt-8 flex flex-col-12 sm:flex-row items-center justify-center lg:justify-start gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full sm:w-auto  rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 "
            />
            <button
              onClick={handleSignUpClick}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Sign Up Now
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Images}
            alt="Person with laptop"
            className=" w-3/3 max-w-[250px]  md:max-w-sm lg:max-w-md xl:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
