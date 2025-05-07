import images from "../../assets/card1.png";
import image from "../../assets/Flexibility.png";

const Productblog = () => {
  return (
    <div className="max-w-2xl mt-[70px] mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">
        Understanding React & Tailwind CSS Integration
      </h2>

      <img
        src={image}
        alt="Blog Visual"
        className="w-full h-60 object-fit rounded-lg mb-4"
      />

      <p className="text-gray-700 mb-4">
        In this article, we explore how React and Tailwind CSS can work together
        to create modern, responsive UIs quickly. You'll learn about components,
        utility-first styling, and best practices for scalable front-end
        development.
      </p>

      <div className="flex items-center mt-4">
        <img
          src={images}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">Jane Doe</p>
          <p className="text-sm text-gray-500">May 7, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Productblog;
