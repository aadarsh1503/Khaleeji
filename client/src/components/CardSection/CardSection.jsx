import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import imageA from "./imageA.png";
import imageB from "./imageB.png";
import imageC from "./imageC.png";

const CardSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  // ✅ Update cards when language changes
  useEffect(() => {
    setCards([
      {
        title: t('drive_sales'),
        description: t('drive_sales_desc'),
        image: imageA,
      },
      {
        title: t('build_loyalty'),
        description: t('build_loyalty_desc'),
        image: imageB,
      },
      {
        title: t('unified_platform'),
        description: t('unified_platform_desc'),
        image: imageC,
      },
    ]);
  }, [i18n.language, t]);

  const handleCardClick = (index) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      if (index === 1) {
        newCards.push(newCards.shift());
      } else if (index === 2) {
        newCards.unshift(newCards.pop());
      }
      return newCards;
    });
  };

  const getPositionClass = (index) => {
    if (index === 1) return "z-0 -translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out";
    if (index === 0) return "z-10 scale-110 translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out";
    if (index === 2) return "z-0 translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out";
    return "hidden";
  };

  return (
    <>
      <div className="lg:flex hidden flex-col items-center mb-20 lg:mb-64">
        <h2 className="text-3xl font-bold mb-5">{t('customer_engagement')}</h2>
        <p className="text-gray-600 text-xl mb-6 lg:mb-44">{t('enable_by_futurecustomer')}</p>

        <div className="relative flex justify-center mt-32 items-center mb-20 gap-4 w-full">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`absolute bg-white shadow-custom rounded-lg transform cursor-pointer flex flex-col justify-between ${getPositionClass(index)}`}
              style={{ width: "310px" }}
              onClick={() => handleCardClick(index)}
            >
              <div className="text-content p-10">
                <h3 className="text-lg font-semibold text-center mb-2">{card.title}</h3>
                <p className="text-gray-500 text-center">{card.description}</p>
              </div>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain mt-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex p-4 flex-col items-center mb-20 lg:hidden">
        <h2 className="text-3xl font-bold mb-5 text-center">{t('customer_engagement')}</h2>
        <p className="text-gray-600 text-xl mb-10 text-center">{t('enable_by_futurecustomer')}</p>

        <div className="flex flex-col gap-8 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white shadow-custom rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-center mb-4">{card.title}</h3>
              <p className="text-gray-500 text-center mb-6">{card.description}</p>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSection;
