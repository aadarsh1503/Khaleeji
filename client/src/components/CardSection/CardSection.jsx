import React, { useState } from 'react';

const CardSection = () => {
  const [cards, setCards] = useState([
    {
      title: "Drive Targeted Sales & Visits",
      description: "An FCT client drove 42% increase in sales at targeted retailers within 60 days",
      image: "path/to/image1.png", // Replace with actual paths
    },
    {
      title: "Build Customer Loyalty",
      description: "An FCT client has witnessed 60% MoM growth in Daily Active Users and 5x increase in repeat visits within the first year",
      image: "path/to/image2.png",
    },
    {
      title: "Create a Unified Data Platform",
      description: "India's leading mall group built a 300,000 strong customer database during the pandemic",
      image: "path/to/image3.png",
    },
  ]);

  const handleCardClick = (index) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
  
      if (index === 1) {
        // Move the left card to the right (cycle it around)
        newCards.push(newCards.shift()); // Moves the left card to the right side
      } else if (index === 2) {
        // Move the right card to the left (cycle it around)
        newCards.unshift(newCards.pop()); // Moves the right card to the left side
      }
  
      return newCards;
    });
  };



  

  const getPositionClass = (index) => {
    if (index === 2) 
      return "z-0 -translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out"; // Left card moves to the right
    if (index === 0) 
      return "z-10 scale-110 translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out"; // Center card stays centered
    if (index === 1) 
      return "z-0 translate-x-72 scale-90 opacity-50 transition-transform duration-1000 ease-in-out"; // Right card moves to the left
    return "hidden"; // Hide any other card positions
};


  return (
    <div className="flex flex-col py-20 items-center mb-20">
      <h2 className="text-3xl font-bold mb-5">Customer Engagement and Loyalty Made Simple</h2>
      <p className="text-gray-600 text-xl mb-6 lg:mb-44">FutureCustomer.Tech enables you to</p>
      <div className="relative flex justify-center mt-32 items-center mb-20 gap-4 w-full">
        {cards.map((card, index) => (
          <div
            key={card.title}  // Use a unique key to force re-render
            className={`absolute bg-white shadow-lg rounded-lg mb-20 p-6 transform cursor-pointer ${getPositionClass(index)}`}
            style={{ width: "300px" }}
            onClick={() => handleCardClick(index)}
          >
            <img src={card.image} alt={card.title} className="w-full h-44 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-center mb-2">{card.title}</h3>
            <p className="text-gray-500 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
