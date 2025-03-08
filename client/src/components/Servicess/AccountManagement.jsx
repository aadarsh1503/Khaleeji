import React from 'react';
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks
import i1 from "./i1.png";

const AccountManagement = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div>
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-center">{t('account_management')}</h2>
      <p className="text-lg mb-6 text-center max-w-4xl mx-auto">{t('account_description')}</p>

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
          <div className="w-2/3 h-auto">
            <img src={i1} alt={t('analytics_placeholder')} />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <ul className="space-y-4">
            {[
              'on_call_support',
              'end_to_end_deployment',
              'virtual_training',
              'issue_resolution',
              'coupon_management',
              'customer_support',
              'retailer_directory',
              'communication_management',
              'contest_management',
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <BsCheckCircle className="text-dgray mr-2 ml-2" />
                {t(item)}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a href="/contact" className="text-center md:text-left">
            <button className="text-black mt-8 font-semibold underline flex items-center hover:text-dgray">
              {t('get_in_touch')} &rarr;
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccountManagement;
