import React from "react";
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import i3 from "./i3.png"
const FCTLoyalty = () => {
  return (
    <div> 
        
    <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Content */}
      <div className="max-w-lg">
       
        <div>
          <h3 className="text-3xl font-semibold mb-2">FCT Loyalty</h3>
          <div className="h-1 w-16 bg-dray mb-4"></div>
          <p className="text-gray-700  mb-6">
          Build your own multi-currency & multi-tier loyalty program<br /> to identify and reward your customers through targeted and<br /> personalised benefits, coupons and experiences
          </p>
          <h4 className="text-base font-semibold mb-4">MODULES</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Loyalty Engine</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Earn & Burn Engine</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" /> 
              <span>Coupons and Rewards</span>
            </li>
          </ul>
          <a
            href="#"
            className="text-black font-medium flex items-center hover:underline"
          >
            Learn More &rarr;
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 lg:mt-0">
        <img
          src={i3}
          alt="FCT Reach Visualization"
          className="w-96 mr-12"
        />
      </div>
    </div>
    </div>
  );
};

export default FCTLoyalty;
