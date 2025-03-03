import React, { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore,AiOutlineMenu, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import i1 from "./i1.png";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const currentRoute = window.location.pathname; // Get the current route
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="bg-dblack lg:block hidden font-poppins shadow-md">
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
    <nav className="bg-dblack lg:hidden block font-poppins shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
    {/* Logo */}
    <a href="/" className="text-xl font-semibold text-gray-800">
      <img src={i1} alt="Logo" className="h-16" />
    </a>

    {/* Hamburger Icon */}
    <button className="lg:hidden text-white" onClick={toggleMenu}>
      <AiOutlineMenu size={30} />
    </button>

    {/* Navigation Items */}
    <div className={`lg:flex lg:relative lg:space-x-8  z-50 fixed inset-y-0 left-0 bg-dblack text-white w-2/3 sm:w-1/2 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out p-6 lg:p-0 lg:w-auto flex flex-col lg:flex-row items-start lg:items-center`}>

      {/* Close Button Inside Menu */}
      <button className="self-end mb-6 text-white" onClick={toggleMenu}>
        <IoClose size={30} />
      </button>

      <a href="/" className="relative mt-4 text-center w-full lg:w-auto">
        <button className="flex items-center justify-start lg:justify-center w-full lg:w-auto hover:text-dwhite">
          <AiOutlineHome className="mr-2" /> Home
        </button>
      </a>
      <a href="/services" className="relative mt-4 w-full lg:w-auto">
        <button className="flex items-center w-full lg:w-auto hover:text-dwhite">
          <AiOutlineAppstore className="mr-2" /> Services
        </button>
      </a>
      <a href="/careers" className="relative mt-4 w-full lg:w-auto">
        <button className="flex items-center w-full lg:w-auto hover:text-dwhite">
          <AiOutlineUser className="mr-2" /> Careers
        </button>
      </a>
      <a href="/contact" className="relative mt-4 w-full lg:w-auto">
        <button className="bg-white text-dblack rounded-md py-3 px-4 flex items-center hover:bg-gray-200">
          Get in Touch
        </button>
      </a>
    </div>
  </div>
</nav>

  </>
  );
};

export default Navbar;
