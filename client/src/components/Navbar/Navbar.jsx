import React, { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import i1 from "./i1.png";
import LanguageToggle from "../../LanguageToggle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const currentRoute = window.location.pathname;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-dblack lg:block hidden font-poppins shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-semibold text-gray-800">
            <img src={i1} alt="Logo" className="h-24" />
          </a>

          {/* Navigation Items */}
          <div className="flex relative right-20 space-x-8">
            {/* Home */}
            <a href="/" className="relative mt-4 ml-8 text-center">
              <button
                className={`flex items-center justify-center mx-auto ${
                  currentRoute === "/" ? "text-gray-400" : "text-white"
                } hover:text-dwhite`}
              >
                <AiOutlineHome className="mr-2 ml-2" /> {t("home")}
              </button>
            </a>

            {/* Services */}
            <a href="/services" className="relative mt-4 text-white">
              <button
                className={`flex items-center ${
                  currentRoute === "/services" ? "text-gray-400" : "text-white"
                } hover:text-dwhite`}
              >
                <AiOutlineAppstore className="mr-2 ml-2" /> {t("services")}
              </button>
            </a>

            {/* Careers */}
            <a href="/careers" className="relative mt-4">
              <button
                className={`flex items-center ${
                  currentRoute === "/careers" ? "text-gray-400" : "text-white"
                } hover:text-dwhite`}
              >
                <AiOutlineUser className="mr-2 ml-2" /> {t("careers")}
              </button>
            </a>

            {/* Get in Touch */}
            <a href="/contact" className="relative mt-1">
              <button className="bg-dblack text-white hover:bg-white outline-white rounded-md hover:text-dblack outline py-3 px-4 flex items-center">
                {t("get_in_touch")}
              </button>
            </a>

            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
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
          <div
            className={`lg:flex lg:relative lg:space-x-8 z-50 fixed inset-y-0 left-0 bg-dblack text-white w-2/3 sm:w-1/2 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 ease-in-out p-6 lg:p-0 lg:w-auto flex flex-col lg:flex-row items-start lg:items-center`}
          >
            {/* Close Button */}
            <button className="self-end mb-6 text-white" onClick={toggleMenu}>
              <IoClose size={30} />
            </button>

            <a href="/" className="relative mt-4 text-center w-full lg:w-auto">
              <button className="flex items-center justify-start lg:justify-center w-full lg:w-auto hover:text-dwhite">
                <AiOutlineHome className="mr-2" /> {t("home")}
              </button>
            </a>

            <a href="/services" className="relative mt-4 w-full lg:w-auto">
              <button className="flex items-center w-full lg:w-auto hover:text-dwhite">
                <AiOutlineAppstore className="mr-2" /> {t("services")}
              </button>
            </a>

            <a href="/careers" className="relative mt-4 w-full lg:w-auto">
              <button className="flex items-center w-full lg:w-auto hover:text-dwhite">
                <AiOutlineUser className="mr-2" /> {t("careers")}
              </button>
            </a>

            <a href="/contact" className="relative mt-4 w-full lg:w-auto">
              <button className="bg-white text-dblack rounded-md py-3 px-4 flex items-center hover:bg-gray-200">
                {t("get_in_touch")}
              </button>
            </a>

            <LanguageToggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;