import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Building digital <br /> products & brands.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This free and open-source landing page template was built using the
            utility classes from Tailwind CSS and based on the components from
            the Flowbite Library and the Blocks System.
          </p>
        </div>

        <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
          <img
            src="https://fleek.marketing/wp-content/uploads/2012/02/seo-blog.jpg"
            className="w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
