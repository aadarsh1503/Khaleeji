import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import ContactSection from "./Contact";
import PhoneInput from "react-phone-input-2";
import i2 from"./i2.svg"
import "react-phone-input-2/lib/style.css";
const GetInTouch = () => {
  return (
    <div className="font-poppinS  overflow-x-hidden ">
      <div className="  ">
        {/* Left Section */}
        <div className="">
<ContactSection />
</div>
<div className="container relative mt-0 lg:-mt-56 mx-auto px-4 py-8">
  {/* Flex container for left and right sections */}
  <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
    {/* Left Section - Address */}
    <div className="bg-white shadow-lg z-10 rounded-lg p-6 text-center space-y-4 relative left-0  lg:left-32 h-56 bottom-64 lg:bottom-20 lg:w-96">
        <div className=" bottom-16 relative">
      <div className=" ">
        <img
          src={i2}
          alt="Map"
          className="w- h- relative bottom-10 left-16 lg:left-12 object-fill rounded-xl"
        />
       
      </div>
      <p className="font-semibold text-gray-800">Registered Address</p>
      <p className="text-sm text-gray-600">
      Building: 1320, Rd No 4149, Block: 441, North Sehla, Kingdom of Bahrain
      </p>
      <a
        href="https://www.google.com/maps/place/Global+Vision+Solutions/@26.1880014,50.519765,16z/data=!4m6!3m5!1s0x3e49afd0213a19d3:0x2f892ffe9e6f0385!8m2!3d26.1868843!4d50.5237206!16s%2Fg%2F11c1wwzmnl?hl=en&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-dwhite underline text-sm"
      >
        Open in Google Maps
      </a>
    </div>
    </div>
    {/* Right Section - Form */}
    <div className=" mx-auto px-4 py-8 grid relative left-0 lg:left-64 overflow-hidden -mt-72 lg:-mt-[400px] lg:grid-cols-2  gap-8">
  {/* Left Section - Address */}


  {/* Right Section - Form */}
  <div className="bg-white shadow-lg z-10 w-full lg:w-[500px] font-poppins  rounded-lg p-8">
    <form className="space-y-5">
      {/* Name */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First"
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
        <div>
          <label className="block text-sm font-medium font-poppins text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Last"
            className="w-full border border-gray-300 rounded-md p-2 "
          />
        </div>
      </div>

      {/* Business Email */}
      <div>
        <label className="block text-sm font-medium font-poppins text-gray-700">
          Business Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Please provide business email."
          className="w-full border border-gray-300 rounded-md p-2 "
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium font-poppins text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <PhoneInput
          country={'bh'}
          inputStyle={{ width: '100%', height: '40px', border: '1px solid #D1D5DB', color: '#4B5563' }}
          containerStyle={{
            width: '100%',
          }}
        />
      </div>

      {/* Company Name */}
   

      {/* Monthly Active Users */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Monthly Active Users <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border font-poppins border-gray-300 rounded-md p-2 "
        >
          <option value="" disabled selected>
            - Select -
          </option>
          <option value="1-100">2000-5000</option>
          <option value="101-500">5000-10k</option>
          <option value="501-1000">1k-100k</option>
          <option value="501-1000">100k-500k</option>
          <option value="501-1000">500k-1M</option>
          <option value="501-1000">1M+</option>
        </select>
      </div>

      {/* Requirement */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tell us about your requirement <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          placeholder="Write your requirement here"
          className="w-full border border-gray-300 rounded-md p-2 "
        ></textarea>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="w-full bg-dblack text-white outline hover:bg-white  hover:outline-black py-2 px-4 rounded-md hover:text-black "
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  </div>
</div>

      </div>
    </div>
  );
};

export default GetInTouch;
