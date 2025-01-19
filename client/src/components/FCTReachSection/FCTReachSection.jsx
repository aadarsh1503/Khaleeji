import React from "react";
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import i1 from "./i1.png"
const FCTReachSection = () => {
  return (
    <div> 
        <div className="text-center font-poppins">
         <h2 className="text-xl  lg:text-3xl font-semibold mb-2">
          The FutureCustomer.Tech Stack for New-Age Businesses
        </h2>
        
        <p className="text-gray-600 text-xl mb-6">Acquire, Engage and Retain your Customers</p>
        </div>
    <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Content */}
      <div className="max-w-lg font-poppins">
       
        <div>
          <h3 className="text-3xl font-semibold mb-2">FCT Reach</h3>
          <div className="h-1 w-16 bg-dgray mb-4"></div>
          <p className="text-gray-700 text-16px mb-6">
            Build brand awareness, drive customer acquisition and augment your marketing outreach
            with digital solutions.
          </p>
          <h4 className="text-base font-semibold mb-4">MODULES</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Customer Relationship Management</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Customisable Landing Pages</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Automated Marketing Campaign Management</span>
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
          src={i1}
          alt="FCT Reach Visualization"
          className="w-full max-w-4xl"
        />
      </div>
    </div>
    </div>
  );
};

export default FCTReachSection;
