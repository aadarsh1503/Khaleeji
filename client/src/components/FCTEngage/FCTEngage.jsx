import React from "react";
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import i1 from "./i1.png"
const FCTEngage = () => {
  return (
    <div> 
        
    <div className="flex flex-col font-poppins max-w-6xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Content */}
      <div className="max-w-lg">
       
        <div>
          <h3 className="text-3xl font-semibold mb-2">FCT Engage</h3>
          <div className="h-1 w-16 bg-dgray mb-4"></div>
          <p className="text-gray-700 max-w-sm mb-6">
          Build channels of communication with your customers, keep them up-to-date via rich media and understand their preferences through fun and easy interactions
          </p>
          <h4 className="text-base font-semibold mb-4">MODULES</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Communication Suite</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Gamification Engine</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-dgray text-lg mr-2" />
              <span>Survey Engine</span>
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
          className="w-96 mr-12"
        />
      </div>
    </div>
    </div>
  );
};

export default FCTEngage;
