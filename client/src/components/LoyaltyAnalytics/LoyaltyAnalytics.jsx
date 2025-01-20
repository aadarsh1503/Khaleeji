import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const LoyaltyAnalytics = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
      {/* Left Side - Placeholder for Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
        <div className="bg-yellow-100 w-[80%] h-[300px] md:h-[400px] rounded-full absolute top-0 left-0 -z-10"></div>
        <div className="w-full h-auto">
          {/* User will add image */}
          <img src="" alt="Analytics Placeholder" className="shadow-lg" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Loyalty Analytics</h2>
        <p className="text-lg mb-6 text-center md:text-left">
          We collect, process and analyze customer interaction and transaction data in order to extract meaningful and actionable insights. It helps you optimize and curate communication, marketing strategies and your loyalty program.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Customer Clustering, Segmentation & Targeting
          </li>
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Communication Strategy Analysis across FCT channels
          </li>
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Customer Loyalty and Brand Affinity Analysis
          </li>
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Customer Behaviour Analysis
          </li>
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Customer Retention Strategy
          </li>
          <li className="flex items-center">
            <AiOutlineCheck className="text-yellow-500 mr-2" />
            Earn and Burn Analysis
          </li>
        </ul>
        <div className="mt-8 text-center md:text-left">
          <button className="text-black font-semibold underline flex items-center hover:text-yellow-500">
            Get in Touch &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyAnalytics;
