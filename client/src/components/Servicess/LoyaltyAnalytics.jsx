import React from 'react';
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks

const LoyaltyAnalytics = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 text-center md:text-center">{t('our_services')}</h2>
      <p className="text-lg text-center md:text-center max-w-4xl mb-20 mx-auto">
        {t('learn_more')}
      </p>

      {/* Loyalty Analytics Heading */}
      <h2 className="text-3xl font-bold mb-4 text-center md:text-center">{t('loyalty_analytics')}</h2>
      <p className="text-lg mb-6 text-center md:text-center max-w-4xl mx-auto">
        {t('analytics_description')}
      </p>

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
        {/* Left Side - Image Placeholder */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
          <div className="w-2/3 h-auto">
            <img src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6210.svg" alt="Analytics Placeholder" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <ul className="space-y-4">
            {[
              'customer_clustering',
              'communication_strategy',
              'loyalty_affinity',
              'customer_behavior',
              'retention_strategy',
              'earn_burn_analysis',
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <BsCheckCircle className="text-dgray mr-2 ml-2" />
                {t(item)}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a href="/contact" className="text-center md:text-left">
            <button className="text-black font-semibold mt-6 underline flex items-center hover:text-dgray">
              {t('get_in_touch')} &rarr;
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LoyaltyAnalytics;
