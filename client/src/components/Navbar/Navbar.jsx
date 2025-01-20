import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import i1 from "./i1.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-dblack font-poppins shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold text-gray-800">
          <img src={i1} alt="Logo" className="h-24" />
        </a>

        {/* Navigation Items */}
        <div className="flex  space-x-8">
          {/* Item 1 */}
          <div className="relative mt-4 text-center">
      {/* Dropdown Button */}
      <button
        onClick={() => toggleDropdown(1)}
        className="hover:text-dwhite text-tgray  flex items-center justify-center mx-auto"
      >
        FutureCustomer.Tech
        {openDropdown === 1 ? (
          <FaChevronUp className="ml-2" />
        ) : (
          <FaChevronDown className="ml-2" />
        )}
      </button>

      {/* Dropdown Content */}
      {openDropdown === 1 && (
        <div className="absolute mt-14 left-16 w-screen z-50 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6  max-w-7xl">
          {/* Card 1 */}
          
          <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="FCT Reach Icon"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold">FCT Reach</h3>
            <p className="text-sm text-gray-600">
              Grow your Customer Preference Database with our Gamified
              Acquisition Tools.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="FCT Engage Icon"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold">FCT Engage</h3>
            <p className="text-sm text-gray-600">
              Drive Relevant Multi-Channel Campaigns and Build Deeper Customer
              Understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="FCT Loyalty Icon"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold">FCT Loyalty</h3>
            <p className="text-sm text-gray-600">
              Increase Retention and Customer Lifetime Value with our
              Customisable Loyalty Engine.
            </p>
          </div>
        </div>
      )}
    </div>

          {/* Item 2 */}
          <a href="/services" className="relative mt-4 text-tgray">
            <button
              onClick={() => toggleDropdown(2)}
              className="hover:text-dwhite flex items-center"
            >
              Services

            </button>

          </a> 

          {/* Item 3 */}
          <div className="relative mt-4 text-tgray">
            <button
              onClick={() => toggleDropdown(3)}
              className="hover:text-dwhite flex items-center"
            >
              Solutions
              {openDropdown === 3 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            {openDropdown === 3 && (
              <div className="absolute mt-2 bg-white text-dblack shadow-md rounded-md w-48">
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 1
                </div>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 2
                </div>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 3
                </div>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Option 4
                </div>
              </div>
            )}
          </div>

          {/* Item 4 */}
          <div className="relative mt-4 text-tgray">
            <button
              onClick={() => toggleDropdown(4)}
              className="hover:text-dwhite flex items-center"
            >
              Careers

            </button>

          </div>
          <div className="relative  mt-4 text-tgray">
            <button
          onClick={() => toggleDropdown(5)}
              className="hover:text-dwhite flex items-center"
            >
              Resources-Unifynd
              {openDropdown === 5 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            {openDropdown === 5 && (
              <div className="absolute mt-2 bg-white text-dblack shadow-md rounded-md w-48">
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</div>
              </div>
            )}
          </div>
          <a href="/contact" className="relative mt-1">
          <button className=" bg-dwhite text-gray-700 hover:bg-dblack hover:outline-dwhite hover:text-dwhite outline  py-3 px-4">Get in Touch</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
