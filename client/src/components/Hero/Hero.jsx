import React, { useEffect, useState } from "react";
import "./Hero.css"
import CardSection from "../CardSection/CardSection";
import FCTReachSection from "../FCTReachSection/FCTReachSection";
import FCTEngage from "../FCTEngage/FCTEngage";
import FCTLoyalty from "../FCTLoyalty/FCTLoyalty";
import TestimonialSlider from "../Testimonials/Testimonials";
import ImpactSection from "../ImpactSection/ImpactSection";
import FCTLearnSection from "../FCTLearnSection/FCTLearnSection";
import Slide from "../Slide/Slide";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  return (
    <div className="">
      <section className="max-w-7xl overflow-x-hidden font-poppins mt-10 mx-auto py-16 px-8 relative">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
  <div className="md:w-1/2 text-left space-y-6 z-10">
      <h1 className="text-4xl md:text-5xl lg:flex hidden text-gray-900 lg:leading-none leading-loose">
        {t('enabling_businesses')}
      </h1>
      <h1 className="text-4xl md:text-5xl lg:hidden flex text-gray-900">
        {t('enabling_businesses')}
      </h1>
      <p className="text-lg text-gray-600">
        {t('empowering_businesses')}
      </p>
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
      
      <CardSection />
      
      <FCTReachSection />
      <FCTEngage />
      <FCTLoyalty />
      <FCTLearnSection />
      <ImpactSection />
      <TestimonialSlider />
    </div>
  );
};

export default Hero;
