import React, { useState } from 'react';
import imageA from "./imageA.png"
import imageB from "./imageB.png"
import imageC from "./imageC.png"
const CardSection = () => {
  const [cards, setCards] = useState([
    {
      title: "Drive Targeted Sales & Visits",
      description: "An FCT client drove 42% increase in sales at targeted retailers within 60 days",
      image: imageA, // Replace with actual paths
    },
    {
      title: "Build Customer Loyalty",
      description: "An FCT client has witnessed 60% MoM growth in Daily Active Users and 5x increase in repeat visits within the first year",
      image: imageB,
    },
    {
      title: "Create a Unified Data Platform",
      description: "India's leading mall group built a 300,000 strong customer database during the pandemic",
      image: imageC,
    },
  ]);

  const handleCardClick = (index) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
  
      if (index === 1) {
        // Rotate cards to the right
        newCards.push(newCards.shift()); // Move the first card to the end
      } else if (index === 2) {
        // Rotate cards to the left
        newCards.unshift(newCards.pop()); // Move the last card to the start
      }
  
      return newCards;
    });
  };
  
  const getPositionClass = (index) => {
    if (index === 1) 
      return "z-0 -translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out"; // Left card
    if (index === 0) 
      return "z-10 scale-110 translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out"; // Center card
    if (index === 2) 
      return "z-0 translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out"; // Right card
    return "hidden"; // Hide other cards if they exist
  };


  return (
    <div className="flex flex-col  items-center mb-20 lg:mb-64">
    <h2 className="text-3xl font-bold mb-5">Customer Engagement and Loyalty Made Simple</h2>
    <p className="text-gray-600 text-xl mb-6 lg:mb-44">FutureCustomer.Tech enables you to</p>
    <div className="relative flex justify-center mt-32 items-center mb-20 gap-4 w-full">
      {cards.map((card, index) => (
        <div
          key={card.title} // Use a unique key to force re-render
          className={`absolute bg-white shadow-custom  rounded-lg  transform cursor-pointer flex flex-col justify-between ${getPositionClass(index)}`}
          style={{ width: "310px" }}
          onClick={() => handleCardClick(index)}
        >
          {/* Text content at the top */}
          <div className="text-content p-10 ">
            <h3 className="text-lg font-semibold text-center mb-2">{card.title}</h3>
            <p className="text-gray-500 text-center">{card.description}</p>
          </div>
  
          {/* Image at the bottom */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-contain mt-auto"
          />
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default CardSection;
