<<<<<<< HEAD
import Imgcontact from "../../../src/assets/Imgcontactpage.png";

export default function Contact() {
  return (
    <>
      <section className=" py-16 mt-[80px] md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-[100px] lg:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight relative inline-block">
              Contact
            </h1>{" "}
            <br />
            <p className="text-blue-600 text-4xl md:text-4xl lg:text-5xl font-bold  leading-tight relative inline-block">
              Our Experts
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Publishers might have detailed questions on areas like creating
              their account, adding their sites and accessing money from their
              wallets. Our experts and support teams are always ready and
              available to help them with any of the above concerns. All you
              need to do is fill in the Contact Form on the right, write down
              the details that are asked for and wait for our support team to
              get in touch with you. We try to address all the concerns of our
              publishers within 24-48 hours.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={Imgcontact}
              alt="Person with laptop"
              className=" w-3/3 max-w-[250px]  md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </section>
      <div>
        <h1 className=" uppercase text-center text-2xl font-bold">
          Contact Us
        </h1>
      </div>
      <div className="max-w-[85%] mx-auto p-6 shadow-lg rounded-lg bg-white">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                aria-label="Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <select
                id="subject"
                aria-label="Subject"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose Subject</option>
                <option value="account">Account</option>
                <option value="site">Site</option>
                <option value="wallet">Wallet</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email ID"
                aria-label="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here"
              aria-label="Your message"
              className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500  p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
=======
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 mt-[100px] sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text and Image */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Consult</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Our Experts
            <span className="block w-16 h-1 bg-blue-600 mt-3 mx-auto md:mx-0"></span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Publishers might have detailed questions on areas like creating
            their account, adding their sites and accessing money from their
            wallets. Our experts and support teams are always ready to help.
            Fill  the contact form and we’ll reach out within 24–48 hours.
          </p>
        </div>

        {/* Right - Form */}
        <div className="bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Choose Subject</option>
                <option>Account</option>
                <option>Site</option>
                <option>Wallet</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Your message here"
              className="w-full p-3 mt-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
>>>>>>> 6cb0f0fd5918763c6bd912d3fbd612badb9e3f26
  );
};

export default Contact;
