import React from "react";
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import { useTranslation } from "react-i18next";
import i1 from "./i1.png";

const FCTReachSection = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      {/* Heading Section */}
      <div className="text-center font-poppins">
        <h2 className="text-xl mt-10 lg:text-3xl font-semibold mb-2">
          {t("future_customer_tech_stack")}
        </h2>

        <p className="text-gray-600 text-xl mb-6">
          {t("acquire_engage_retain")}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
        {/* Left Content */}
        <div className="max-w-lg font-poppins">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{t("fct_reach")}</h3>
            <div className="h-1 w-16 bg-dgray mb-4"></div>
            <p className="text-gray-700 text-16px mb-6">
              {t("fct_reach_description")}
            </p>

            <h4 className="text-base font-semibold mb-4">{t("modules")}</h4>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("crm")}</span>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("custom_landing_pages")}</span>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="text-dgray text-lg mr-2 ml-2" />
                <span>{t("automated_marketing_campaigns")}</span>
              </li>
            </ul>

            <a
              href="#"
              className="text-black font-medium flex items-center hover:underline"
            >
              {t("learn_more")} &rarr;
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src={i1}
            alt={t("fct_image_alt")}
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FCTReachSection;
