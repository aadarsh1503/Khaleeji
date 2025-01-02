import React from 'react';
import i1 from "./i1.png"
const Navbar = () => {
  return (
    <nav className="bg-dblack   shadow-md">
      <div className="flex items-center max-w-7xl mx-auto justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          <img
            src={i1}
            alt="Logo"
            className="h-24"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
