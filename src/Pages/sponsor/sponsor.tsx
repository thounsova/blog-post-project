import React from "react";
import img from "../../assets/Enjoyment.png";
import sponsor1 from "../../assets/sp1.webp";
import sponsor2 from "../../assets/sp2.webp";
const sponsor = () => {
  return (
    <>
      <div className="mt-[120px]">
        <p className="text-xl text-center">We work for sponsors only</p>
        <h2 className="text-3xl text-center font-bold text-blue-700 p-3">
          Proud to have been trusted by over 400 sponsors of all continents.
        </h2>
      </div>
      <div className="p-20 max-sm:p-10 max-sm:ml-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 p-5">
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor1} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor2} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor1} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor1} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor1} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="  w-[80%] h-[50%] max-sm:mt-10   rounded-2xl  hover:shadow-xl">
            <img src={sponsor1} alt="" className="w-full h-full rounded-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 p-5">
          <div className="  w-[80%] max-sm:mt-10   border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10 border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 p-5">
          <div className="  w-[80%] max-sm:mt-10   border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10  border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
          <div className="  w-[80%] max-sm:mt-10 border rounded-lg  hover:shadow-lg">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default sponsor;
