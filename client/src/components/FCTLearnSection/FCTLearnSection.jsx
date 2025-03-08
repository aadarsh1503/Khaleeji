import React from "react";
import { FiSmartphone, FiMonitor, FiMessageSquare } from "react-icons/fi";
import { BsHouseDoor, BsUiRadios } from "react-icons/bs";
import { useTranslation } from "react-i18next"; // Import i18n hook

const FCTLearnSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4 mt-10 text-gray-900">
        <span className="px-2">{t("with_fct_learn")}</span>
      </h2>

      <p className="text-gray-700 text-lg max-w-2xl mb-12">
        {t("empower_your_team")}
      </p>

      <h3 className="text-xl font-bold mb-4 mt-6 text-gray-900">
        <span className="px-2">{t("available_on")}</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-14 mb-8">
        {[
          { icon: <BsHouseDoor size={36} />, label: t("progressive_webapp") },
          { icon: <FiSmartphone size={36} />, label: t("app_ios") },
          { icon: <FiSmartphone size={36} />, label: t("app_android") },
          { icon: <FiMessageSquare size={36} />, label: t("chat") },
          { icon: <BsUiRadios size={36} />, label: t("kiosk") },
          { icon: <FiMonitor size={36} />, label: t("web_dashboards") },
        ].map((item, index) => (
          <div key={index} className="flex flex-row items-center text-gray-800">
            <span className="text-dgray mr-2 ml-2">{item.icon}</span>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <a href="/contact">
        <button className="bg-black hover:bg-gray-100 font-poppins hover:text-black hover:outline-black outline text-white mb-16 py-4 px-6 mt-10 rounded">
          {t("request_demo")}
        </button>
      </a>
    </div>
  );
};

export default FCTLearnSection;
