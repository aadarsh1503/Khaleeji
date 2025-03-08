import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full min-h-screen'>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-dblack h-[450px] bg-center"
        style={{
          backgroundImage: `url()`, // Add your image URL here
        }}
      >
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-DarkRed opacity-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-8 lg:px-32">
          <div className="text-white max-w-lg mt-0 lg:-mt-12 ml-0 lg:ml-12">
            {/* Title */}
            <h1 className="lg:text-5xl text-2xl font-bertioga font-bold mb-8">
              {t('get_in_touch')}
            </h1>

            {/* Description */}
            <p className="text-16 lg:w-full lg:flex hidden w-full mb-8">
              {t('contact_description_desktop')}
            </p>
            <p className="text-16 lg:w-full lg:hidden flex w-full mb-8">
              {t('contact_description_mobile')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
