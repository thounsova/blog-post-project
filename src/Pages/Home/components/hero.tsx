import React, { useState } from "react";
import {
  DollarSign,
  Timer,
  CheckCircle,
  Scale,
  Handshake,
  MessageCircle,
} from "lucide-react";
import Images from "../../../assets/you.png";

const HeroWithCards: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignUpClick = () => {
    alert(`Signing up with email: ${email}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20 mt-[80px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Get Paid{" "}
              <span className="text-blue-600">
                by Selling Guest Posts & Publishing Content
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg  leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join thousands of bloggers on Blog Management by publishing
              high-quality content and earning handsomely. Sign up now and start
              making money today!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="flex-1 w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-2.5 px-4 text-sm"
              />
              <button
                onClick={handleSignUpClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-md transition duration-300 text-sm w-full sm:w-auto"
              >
                Sign Up Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Images}
              alt="Person with laptop"
              className="w-full max-w-[250px] md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          <span className="text-blue-600 font-bold">40000+ Publishers</span>{" "}
          have chosen BM,
          <span className="text-blue-600 font-bold"> Here's why</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <DollarSign className="text-blue-600 w-10 h-10 mx-auto mb-4" />
              ),
              title: "High Earning Potential",
              desc: "Earn upwards of $2500/month with guest posts! Top publishers earn over $5000 during peak months.",
            },
            {
              icon: <Timer className="text-blue-600 w-10 h-10 mx-auto mb-4" />,
              title: "Payment Within 24-Hours",
              desc: "Get paid whenever you request. No waiting for payout cycles—just instant 24-hour transfers.",
            },
            {
              icon: (
                <CheckCircle className="text-blue-600 w-10 h-10 mx-auto mb-4" />
              ),
              title: "High-Quality SEO Articles",
              desc: "Receive SEO-optimized content to boost your site’s metrics and visibility in search engines.",
            },
            {
              icon: <Scale className="text-blue-600 w-10 h-10 mx-auto mb-4" />,
              title: "Publisher Has Final Word",
              desc: "You have full control over approvals—no overrides, ever.",
            },
            {
              icon: (
                <Handshake className="text-blue-600 w-10 h-10 mx-auto mb-4" />
              ),
              title: "Life-Long Relationships",
              desc: "We value long-term partnerships and foster trust with every publisher.",
            },
            {
              icon: (
                <MessageCircle className="text-blue-600 w-10 h-10 mx-auto mb-4" />
              ),
              title: "24x7 Publisher Support",
              desc: "Our dedicated team is here round-the-clock to solve your issues promptly.",
            },
          ].map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="bg-white shadow-sm p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
            >
              {icon}
              <h3 className="text-lg font-semibold text-blue-600 mb-2 text-center">
                {title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroWithCards;
