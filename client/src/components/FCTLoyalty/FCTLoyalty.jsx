import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import { useTranslation } from "react-i18next"; // Import i18n hook
import i3 from "./i3.png";

const FCTLoyalty = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  return (
    <div>
      <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
        {/* Left Content */}
        <div className="max-w-lg">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t("fct_loyalty_title")}</h3>
            <div className="h-1 w-16 bg-dgray mb-4"></div>
            <p className="text-gray-700 mb-6">{t("fct_loyalty_description")}</p>
            
            <h4 className="text-base font-semibold mb-4">{t("modules")}</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("loyalty_engine")}</span>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("earn_burn_engine")}</span>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("coupons_rewards")}</span>
              </li>
            </ul>
            <a href="#" className="text-black  flex items-center hover:underline">
              {t("learn_more")} &rarr;
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className={`mt-10 lg:mt-0 ${i18n.language === 'ar' ? 'relative left-12 lg:left-0' : '' }`}>
          <img
            src={i3}
            alt={t("fct_loyalty_image_alt")}
            className="w-96 mr-12"
          />
        </div>
      </div>
    </div>
  );
};

export default FCTLoyalty;
