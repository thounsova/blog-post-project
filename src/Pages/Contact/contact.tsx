<div className="bg-white p-6 sm:p-8 shadow-lg rounded-lg">
  <form className="flex flex-col space-y-4">
    {/* First Row: Name and Subject */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      <input
        type="text"
        placeholder="Name"
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Choose Subject</option>
        <option>Account</option>
        <option>Site</option>
        <option>Wallet</option>
      </select>
    </div>

    {/* Second Row: Email and Phone */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      <input
        type="email"
        placeholder="Email ID"
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Message Area */}
    <textarea
      placeholder="Your message here"
      className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none"
    >
      Submit
    </button>
  </form>
</div>;
