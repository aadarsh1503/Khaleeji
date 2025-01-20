import React from 'react';
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks

const LoyaltyMarketing = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-center">Loyalty Marketing</h2>
      <p className="text-lg mb-6 text-center md:text-center max-w-4xl mx-auto">
        Unifynd’s Marketing suite creates a seamless and rewarding customer experience across their shopping journey and beyond with its robust strategy.
      </p>

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
        {/* Left Side - Placeholder for Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
          <div className="w-2/3 h-auto">
            {/* User will add image */}
            <img
              src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6212.svg"
              alt="Analytics Placeholder"
              className=""
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <ul className="space-y-6">
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Deployment of various loyalty program campaigns  via <br />multiple communication channels.
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Create an omnichannel marketing strategy that <br /> seamlessly connects customers at varied touch- <br />points to provide an engaging shopping experience.
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Ideate & implement acquisition-driven plans to build <br /> a user base and understand customer behavioral patterns.
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Execute timely campaigns to secure customer engagement <br /> and retention.
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Measure, optimize, and revisit KPIs to refine marketing efforts.
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-dgray mt-1 mr-3 flex-shrink-0" />
              Collaborate and partner with retailers to deploy personalized <br /> marketing strategies.
            </li>
          </ul>
          <a href='/contact' className="text-center md:text-left">
            <button className="text-black mt-8  font-semibold underline flex items-center hover:text-dgray">
              Get in Touch &rarr;
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LoyaltyMarketing;
