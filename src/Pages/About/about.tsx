import React from 'react'
import About from "../../../src/assets/about.png"
import { CheckCircle, XCircle } from 'lucide-react';
export const about = () => {
  return (
    <>
         <section className="py-12 md:py-20 mt-[80px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-blue-700">
             About Us{" "}
            </h1>
            <p className="mt-4 text-base  leading-relaxed max-w-xl mx-auto lg:mx-0 ">
              Blog Management is a platform that allows publishers, bloggers and website owners to earn money by placing content. It is a trustworthy and credible platform that allows you to sell guest posts and sponsored content in a legitimate way. Website owners can add their websites on the platform and get paid for publishing content. Blog Management helps website owners monetize their blogs and websites by opening up a steady revenue stream.
            </p>
            </div>
          {/* Image */}
          <img src={About}alt="Person with laptop" className="w-full max-w-[250px] md:max-w-sm lg:max-w-md xl:max-w-lg"/> 
        </div>
        <div>
          <h1 className='text-2xl mt-25 ml-17 text-blue-700 max-sm:ml-10  '>A Real Platform Driven by
            <span> Real Agency Professionals </span>
            </h1>
            <h1 className='mt-7 ml-17 text-base max-sm:ml-10 '>Blog Management is a platform that allows publishers, bloggers and website owners to <br /> earn money by placing content. It is a trustworthy and credible platform that allows you to <br />sell guest posts and sponsored content in a legitimate way. Website owners can add their websites <br />on the platform and get paid for publishing content. <br /> Blog Management helps website <br />owners monetize their  blogs and websites by opening <br /> up a steady revenue stream.</h1>
        </div>
        <div>
          <h1 className='mt-7 text-base ml-17 max-sm:ml-10'>Mashum Mollah and his team realized that publishers, bloggers and website owners are being unable to <br />monetize their websites effectively because of certain problems.
          <span className='text-blue-700'> This is why he came up with <br /> Blog Management as a platform that presents the solutions to all problems</span>
          </h1>
        </div>
        <div className='mt-10 text-2xl ml-17 max-sm:ml-10 flex flex-row gap-120 font-bold'>
          <h1>Problem</h1>
          <h1>Solution</h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-50">
      {/* Negative Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="text-red-500" />
        </div>
        <p className="text-gray-700">
          Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
        </p>
      </div>

      {/* Positive Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-green-500" />
        </div>
        <p className="text-gray-700">
          On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-50">
      {/* Negative Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="text-red-500" />
        </div>
        <p className="text-gray-700">
          Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
        </p>
      </div>

      {/* Positive Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-green-500" />
        </div>
        <p className="text-gray-700">
          On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-50">
      {/* Negative Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="text-red-500" />
        </div>
        <p className="text-gray-700">
          Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
        </p>
      </div>

      {/* Positive Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-green-500" />
        </div>
        <p className="text-gray-700">
          On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-50">
      {/* Negative Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="text-red-500" />
        </div>
        <p className="text-gray-700">
          Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
        </p>
      </div>

      {/* Positive Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-green-500" />
        </div>
        <p className="text-gray-700">
          On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-gray-50">
      {/* Negative Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="text-red-500" />
        </div>
        <p className="text-gray-700">
          Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
        </p>
      </div>

      {/* Positive Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500 max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-green-500" />
        </div>
        <p className="text-gray-700">
          On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
        </p>
      </div>
    </div>
        </div>
      </section>
      </>
  )
}

export default about