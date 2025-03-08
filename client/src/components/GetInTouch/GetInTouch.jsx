import React, { useEffect, useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import ContactSection from "./Contact";
import PhoneInput from "react-phone-input-2";
import i2 from"./i2.svg"
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
const GetInTouch = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);
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
    <div className={`bg-white shadow-lg z-10 rounded-lg p-6 ${i18n.language === 'ar' ? 'lg:right-32 right-0':''} text-center space-y-4 relative left-0  lg:left-32 h-56 bottom-64 lg:bottom-20 lg:w-96`}>
        <div className=" bottom-16 relative">
      <div className=" ">
        <img
          src={i2}
          alt="Map"
          className={`w- h- relative bottom-10 left-16  ${i18n.language === 'ar' ? 'lg:right-12 right-16':''} lg:left-12 left-0 object-fill rounded-xl`}
        />
       
      </div>
      <p className="font-semibold text-gray-800">{t('registered_address')}</p>
    <p className="text-sm text-gray-600">
      {t('address_line')}
    </p>
    <a
      href="https://www.google.com/maps/place/Global+Vision+Solutions/@26.1880014,50.519765,16z/data=!4m6!3m5!1s0x3e49afd0213a19d3:0x2f892ffe9e6f0385!8m2!3d26.1868843!4d50.5237206!16s%2Fg%2F11c1wwzmnl?hl=en&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-dwhite underline text-sm"
    >
      {t('open_in_maps')}
    </a>
    </div>
    </div>
    {/* Right Section - Form */}
    <div className={`  px-4 py-8 grid relative ${i18n.language === 'ar' ? 'lg:right-64':'lg:left-64 mx-auto'} left-0  overflow-hidden -mt-72 lg:-mt-[400px] lg:grid-cols-2  gap-8`}>
  {/* Left Section - Address */}


  {/* Right Section - Form */}
  <div className={`bg-white shadow-lg z-10 w-[350px] lg:w-[500px] font-poppins relative  ${i18n.language === 'ar' ? 'left-1 relative right-0' : 'lg:right-0 right-4'}  rounded-lg p-8 `}>
  <form className="space-y-5">

      {/* Name Input */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('first_name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={t('placeholder_first')}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium font-poppins text-gray-700">
            {t('last_name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={t('placeholder_last')}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Business Email */}
      <div>
        <label className="block text-sm font-medium font-poppins text-gray-700">
          {t('business_email')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder={t('placeholder_email')}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Phone Input */}
    <div>
  <label className="block text-sm font-medium font-poppins text-gray-700">
    {t('phone')} <span className="text-red-500">*</span>
  </label>
  <PhoneInput
    country="bh"
    inputStyle={{
      width: '100%',
      height: '40px',
      border: '1px solid #D1D5DB',
      color: '#4B5563',
      direction: 'ltr', // Ensure LTR for icon position
    }}
    containerStyle={{
      width: '100%',
      direction: 'ltr', // Force LTR direction
    }}
  />
</div>


      {/* Monthly Active Users */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('monthly_active_users')} <span className="text-red-500">*</span>
        </label>
        <select className="w-full border font-poppins border-gray-300 rounded-md p-2">
          <option value="" disabled selected>{t('select_option')}</option>
          <option value="2000-5000">2000-5000</option>
          <option value="5000-10k">5000-10k</option>
          <option value="1k-100k">1k-100k</option>
          <option value="100k-500k">100k-500k</option>
          <option value="500k-1M">500k-1M</option>
          <option value="1M+">1M+</option>
        </select>
      </div>

      {/* Requirement */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('requirement')} <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          placeholder={t('placeholder_requirement')}
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-dblack text-white outline hover:bg-white hover:outline-black py-2 px-4 rounded-md hover:text-black"
        >
          {t('submit')}
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
