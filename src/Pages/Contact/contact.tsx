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
            Fill the contact form and we’ll reach out within 24–48 hours.
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
  );
};

export default Contact;
