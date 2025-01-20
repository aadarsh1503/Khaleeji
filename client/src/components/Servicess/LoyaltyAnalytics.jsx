import React from 'react';

import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
const LoyaltyAnalytics = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 text-center md:text-center">Our Services</h2>
        <p className="text-lg text-center md:text-center max-w-4xl mb-20 mx-auto">
        Learn More About How We Can Help You
        </p>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-center">Loyalty Analytics</h2>
        <p className="text-lg mb-6 text-center md:text-center max-w-4xl mx-auto">
          We collect, process and analyze customer interaction and transaction data in order to extract meaningful and actionable insights. It helps you optimize and curate communication, marketing strategies and your loyalty program.
        </p>
   
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
      {/* Left Side - Placeholder for Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
    
        <div className="w-2/3 h-auto">
          {/* User will add image */}
          <img src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6210.svg" alt="Analytics Placeholder" className="" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-gray-800">
      
        <ul className="space-y-4">
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Customer Clustering, Segmentation & Targeting
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Communication Strategy Analysis across FCT channels
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Customer Loyalty and Brand Affinity Analysis
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Customer Behaviour Analysis
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Customer Retention Strategy
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Earn and Burn Analysis
          </li>
        </ul>
        <a href='/contact' className=" text-center md:text-left">
          <button className="text-black font-semibold mt-6 underline flex items-center hover:text-dgray">
            Get in Touch &rarr;
          </button>
        </a>
      </div>
    </section>
    </div>
  );
};

export default LoyaltyAnalytics;
