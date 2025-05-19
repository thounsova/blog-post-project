import React from "react";
import About from "../../../src/assets/sitting-women-with-analytics.svg";
import { CheckCircle, XCircle } from "lucide-react";

const AboutSection = () => {
  const problems = [
    {
      problem:
        "Publishers spend a lot of time to promote their websites on social platforms or through cold outreach to get leads. This distracts them from maintaining their websites and managing orders.",
      solution:
        "On Blog Management, we market and publicize your blog through PPC, Emails, Social Media, and more. This means you can focus on improving your website while we handle the orders.",
    },
    {
      problem:
        "Finding legitimate platforms to sell guest or sponsored posts can be hard, with many unreliable sources in the market.",
      solution:
        "Blog Management offers a trustworthy, agency-backed platform for selling guest and sponsored posts in a professional environment.",
    },
    {
      problem:
        "Managing incoming orders manually can lead to delays, miscommunication, and lost opportunities.",
      solution:
        "We streamline your order process with our platform so you can easily manage and fulfill guest post requests.",
    },
  ];

  return (
    <section className="py-12 md:py-20 mt-[80px]">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700">
            About Us
          </h1>
          <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Blog Management is a platform that allows publishers, bloggers, and
            website owners to earn money by placing content. It offers a
            trustworthy and credible way to sell guest and sponsored posts.
            Website owners can list their platforms and generate consistent
            revenue while we help them monetize through strategic promotion and
            exposure.
          </p>
        </div>
        <img
          src={About}
          alt="Person with laptop"
          className="w-full max-w-[250px] md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center lg:text-left mb-4">
          A Real Platform Driven by Real Agency Professionals
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          Mashum Mollah and his team identified challenges faced by website
          owners in monetizing their platforms.{" "}
          <span className="text-blue-700 font-medium">Blog Management</span> was
          built to address these issues by offering comprehensive solutions for
          promotion, order handling, and monetization.
        </p>
      </div>

      {/* Problem-Solution Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-red-500">Problems</h3>
          <h3 className="text-xl font-bold text-green-600">Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="text-red-500" />
                  <span className="font-semibold text-gray-800">Problem</span>
                </div>
                <p className="text-gray-700">{item.problem}</p>
              </div>
              <div className="bg-white shadow-lg rounded-2xl p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-green-500" />
                  <span className="font-semibold text-gray-800">Solution</span>
                </div>
                <p className="text-gray-700">{item.solution}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
