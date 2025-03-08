import React from 'react';
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { BsCheckCircle } from "react-icons/bs"; // React Icons for tick marks

const LoyaltyMarketing = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 text-center md:text-center">{t('loyalty_marketing')}</h2>
      <p className="text-lg mb-6 text-center md:text-center max-w-4xl mx-auto">
        {t('marketing_description')}
      </p>

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-white">
        {/* Left Side - Image Placeholder */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative">
          <div className="w-2/3 h-auto">
            <img
              src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6212.svg"
              alt={t('analytics_placeholder')}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <ul className="space-y-6">
            {[
              'campaign_deployment',
              'omnichannel_strategy',
              'acquisition_plans',
              'timely_campaigns',
              'measure_optimize',
              'retailer_collaboration',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <BsCheckCircle className="text-dgray mt-1 mr-3 ml-2 flex-shrink-0" />
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

export default LoyaltyMarketing;
