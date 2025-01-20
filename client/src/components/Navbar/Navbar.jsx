import React, { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import i1 from "./i1.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const currentRoute = window.location.pathname; // Get the current route

  return (
    <nav className="bg-dblack font-poppins shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold text-gray-800">
          <img src={i1} alt="Logo" className="h-24" />
        </a>

        {/* Navigation Items */}
        <div className="flex relative right-20 space-x-8">
          {/* Home */}
          <a href="/" className="relative mt-4 text-center">
            <button
              onClick={() => toggleDropdown(1)}
              className={`flex items-center justify-center mx-auto ${
                currentRoute === "/" ? "text-gray-400" : "text-white"
              } hover:text-dwhite`}
            >
              <AiOutlineHome className="mr-2" /> Home
            </button>
          </a>

          {/* Services */}
          <a href="/services" className="relative mt-4 text-white">
            <button
              onClick={() => toggleDropdown(2)}
              className={`flex items-center ${
                currentRoute === "/services" ? "text-gray-400" : "text-white"
              } hover:text-dwhite`}
            >
              <AiOutlineAppstore className="mr-2" /> Services
            </button>
          </a>

          {/* Careers */}
          <div className="relative mt-4">
            <button
              onClick={() => toggleDropdown(4)}
              className={`flex items-center ${
                currentRoute === "/careers" ? "text-gray-400" : "text-white"
              } hover:text-dwhite`}
            >
              <AiOutlineUser className="mr-2" /> Careers
            </button>
          </div>

          {/* Get in Touch */}
          <a href="/contact" className="relative mt-1">
            <button
              className={`bg-dblack text-white hover:bg-white outline-white rounded-md hover:text-dblack outline py-3 px-4 flex items-center `}
            >
               Get in Touch
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
