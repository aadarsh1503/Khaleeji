import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1_name'),
      text: t('testimonial1_text'),
      address: t('testimonial1_address'),
      image: "https://media.istockphoto.com/id/1354898601/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=qhlY6BZ9CowHjWb5Fk7WNO8AI8Br6CEzL-bbtHeS8po=",
    },
    {
      id: 2,
      name: t('testimonial2_name'),
      text: t('testimonial2_text'),
      address: t('testimonial2_address'),
      image: "https://img.freepik.com/premium-photo/portrait-handsome-confident-arabian-indian-successful-businessman-entrepreneur-lawyer-formal-suit-sit-work-desk-with-laptop-modern-creative-office-looks-camera-smile-friendly_754108-887.jpg?semt=ais_hybrid",
    },
    {
      id: 3,
      name: t('testimonial3_name'),
      text: t('testimonial3_text'),
      address: t('testimonial3_address'),
      image: "https://www.shutterstock.com/image-photo/arabian-business-man-working-on-260nw-327339701.jpg",
    },
    {
      id: 4,
      name: t('testimonial4_name'),
      text: t('testimonial4_text'),
      address: t('testimonial4_address'),
      image: "https://www.shutterstock.com/image-photo/saudi-character-sitting-working-using-600nw-2476402737.jpg",
    }
    
  ];

  const [current, setCurrent] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const reorderedTestimonials = [
    testimonials[(current + 0) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  const truncateText = (text, lines) => {
    const maxChars = lines * 50;
    return text.length > maxChars ? text.substring(0, maxChars) + "..." : text;
  };

  return (
    <div className="space-y-8 mt-4 mb-4 lg:mb-32 lg:mt-32">
      <div className="lg:text-3xl mt-9 -mb-9 text-2xl lg:ml-44 ml-4 text-lightblue text-center font-bold max-w-5xl mx-auto">
        {t('client_testimonials_heading')}
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <button
          onClick={handlePrev}
          dir='ltr'
          className={`text-gray-600 hover:text-gray-800 p-4 ${i18n.language === 'ar'? 'rotate-180':'' } bg-gray-200 rounded-full focus:outline-none mx-4`}
        >
          &#8592;
        </button>

        <div className="flex items-center gap-12 mt-32">
          {reorderedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative transition-all duration-1000 ease-in-out flex flex-col items-center bg-white shadow-md p-6 rounded-lg
                ${index === 1
                  ? "scale-110 opacity-100 h-[456px] w-72 transform shadow-xl"
                  : "scale-90 opacity-60 w-72"}`}
            >
              <div
                className={`absolute -top-10 flex justify-center items-center w-24 h-24 rounded-full overflow-hidden border-4 ${index === 1 ? "border-DarkBlue" : "border-gray-200"}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`object-cover w-full h-full ${index === 1 ? "scale-110" : "scale-100"}`}
                />
              </div>
              <div className="text-5xl text-DarkYellow mt-4 lg:mt-10">“</div>
              <p className="text-DarkBlue font-bold mb-1">{testimonial.name}</p>
              <p className="text-gray-600 max-w-7xl text-center">
                {index === 1 ? testimonial.text : truncateText(testimonial.text, 3)}
              </p>
              <p className="text-gray-500 mt-2">{testimonial.address}</p>
              <div className="text-5xl text-DarkYellow mt-2">”</div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          dir='ltr'
          className={`text-gray-600 hover:text-gray-800 p-4 ${i18n.language === 'ar'? 'rotate-180':'' }  bg-gray-200 rounded-full focus:outline-none mx-4`}
        >
          &#8594;
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 lg:hidden mt-10 px-4">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
            </div>
            <div className="text-lightblue font-bold mb-1">{testimonial.name}</div>
            <p className="text-gray-500 mt-2">{testimonial.address}</p>
            <p className="text-gray-600 max-w-7xl text-center">
              {expandedIndex === index ? testimonial.text : truncateText(testimonial.text, 3)}
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <button
                className={`h-2 w-2 rounded-full ${expandedIndex === index ? 'bg-lightblue' : 'bg-gray-300'}`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
