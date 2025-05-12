import React from 'react'
import About from "../../../src/assets/about.png"
export const about = () => {
  return (
    <>
         <section className="py-12 md:py-20 mt-[80px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-blue-700">
             About Us{" "}
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Blog Management is a platform that allows publishers, bloggers and website owners to earn money by placing content. It is a trustworthy and credible platform that allows you to sell guest posts and sponsored content in a legitimate way. Website owners can add their websites on the platform and get paid for publishing content. Blog Management helps website owners monetize their blogs and websites by opening up a steady revenue stream.
            </p>
            </div>
          {/* Image */}
          <img src={About}alt="Person with laptop" className="w-full max-w-[250px] md:max-w-sm lg:max-w-md xl:max-w-lg"/> 
        </div>
        <div>
          <h1 className='text-2xl mt-25 ml-17 text-blue-700'>A Real Platform Driven by
            <span> Real Agency Professionals </span>
            </h1>
            <h1 className='mt-7 text-xl ml-17'>Blog Management is a platform that allows publishers, bloggers and website owners to earn money by placing content. It is a trustworthy and credible platform that allows you to sell guest posts and sponsored content in a legitimate way. Website owners can add their websites on the platform and get paid for publishing content. Blog Management helps website owners monetize their blogs and websites by opening up a steady revenue stream.
          </h1>
         
        </div>
        <div>
          <h1 className='mt-7 text-xl ml-17'>Mashum Mollah and his team realized that publishers, bloggers and website owners are being unable to monetize their websites effectively because of certain problems. This is why he came up with Blog Management as a platform that presents the solutions to all problems.</h1>
        </div>
      </section>
      </>
  )
}

export default about