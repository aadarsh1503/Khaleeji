import React from "react";
import "./Hero.css"
const Hero = () => {
  return (
    <div className="">
      <section className="max-w-7xl font-poppins mt-10 mx-auto py-16 px-8 relative">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-left space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl text-gray-900 leading-loose space-y-4">
              Enabling Businesses<br /> to Manage their<br /> Customer Lifecycle
            </h1>
            <p className="text-lg text-gray-600">
              Empowering Businesses to Acquire, Engage and Retain their Customers
              by Building Brand Loyalty
            </p>
            <button className="bg-black text-yellow-500 px-6 py-3 rounded shadow-md hover:bg-gray-800 transition">
              Request a Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0 z-10">
            <img
              src="https://www.unifynd.com/wp-content/uploads/2022/04/Homepage-Banner.svg"
              alt="Customer Lifecycle"
              className="w-3/4"
            />
          </div>
        </div>

      
      </section>
    </div>
  );
};

export default Hero;