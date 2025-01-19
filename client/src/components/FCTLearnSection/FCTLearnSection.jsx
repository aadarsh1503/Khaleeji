import React from "react";
import { FiSmartphone, FiMonitor, FiMessageSquare } from "react-icons/fi";
import { BsHouseDoor, BsUiRadios } from "react-icons/bs";

const FCTLearnSection = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        <span className=" px-2">With FCT Learn</span>
      </h2>
      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Empower your team with data, analytics and insights about your customer shopping behaviour, preferences and optimise your marketing ROI.
      </p>

      <h3 className="text-xl font-bold mb-4 mt-6 text-gray-900">
        <span className=" px-2">Available On</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-14 mb-8">
  <div className="flex flex-row items-center text-gray-800">
    <BsHouseDoor size={36} className="text-dgray mr-2" />
    <p className="text-sm">Progressive WebApp</p>
  </div>

  <div className="flex flex-row items-center text-gray-800">
    <FiSmartphone size={36} className="text-dgray mr-2" />
    <p className="text-sm">App (iOS)</p>
  </div>

  <div className="flex flex-row items-center text-gray-800">
    <FiSmartphone size={36} className="text-dgray mr-2" />
    <p className="text-sm">App (Android)</p>
  </div>

  <div className="flex flex-row items-center text-gray-800">
    <FiMessageSquare size={36} className="text-dgray mr-2" />
    <p className="text-sm">Chat</p>
  </div>

  <div className="flex flex-row items-center text-gray-800">
    <BsUiRadios size={36} className="text-dgray mr-2" />
    <p className="text-sm">Kiosk</p>
  </div>

  <div className="flex flex-row items-center text-gray-800">
    <FiMonitor size={36} className="text-dgray mr-2" />
    <p className="text-sm">Web Dashboards</p>
  </div>
</div>


      <button className="bg-dwhite text-gray-700 py-2 px-6 mt-10 rounded">
        Request A Demo
      </button>
    </div>
  );
};

export default FCTLearnSection;
