import React from 'react';

import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
const AccountManagement = () => {
  return (
    <div>

          <h2 className="text-3xl font-bold mb-4 text-center md:text-center">Account Management</h2>
        <p className="text-lg mb-6 text-center md:text-center max-w-4xl mx-auto">
        We provide you with end-to-end dedicated account management. Ensure an efficient running of your program and provide holistic assistance for strategic discussions and execution.
        </p>
   
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
      {/* Left Side - Placeholder for Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
    
        <div className="w-2/3 h-auto">
          {/* User will add image */}
          <img src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6208.svg" alt="Analytics Placeholder" className="" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-gray-800">
      
        <ul className="space-y-4">
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Dedicated on-call support
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            End-to-end deployment and upkeep
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Virtual training sessions and documentation
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Resolving Issues & Bugs
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Coupon and Reward Management
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Customer Support Management
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Retailer Directory Management
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Communication Management
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-dgray mr-2" />
            Contest Management
          </li>
        </ul>
        <div className="mt-8 text-center md:text-left">
          <button className="text-black font-semibold underline flex items-center hover:text-dgray">
            Get in Touch &rarr;
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AccountManagement;
