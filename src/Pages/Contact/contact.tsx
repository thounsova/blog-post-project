export default function Contact() {
  return (
    <>
      <div>
        <h1 className="mt-[100px] uppercase text-center text-2xl">Contact</h1>
      </div>
      <div className="max-w-[85%] mx-auto p-6 bg-white shadow-lg rounded-lg">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose Subject</option>
              <option>Accout</option>
              <option>Site</option>
              <option>Wallte</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your message here"
            className="w-full p-2 mt-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
