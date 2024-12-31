import React from 'react';
import i1 from "./i1.jpg"
const Navbar = () => {
  return (
    <nav className="bg-dblack p-2 z-0 px-6 shadow-md">
      <div className="flex items-center justify-between">
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
