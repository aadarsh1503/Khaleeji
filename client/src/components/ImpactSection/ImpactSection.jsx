import React, { useState, useEffect } from "react";
import {
  AiOutlineLineChart,
  AiOutlineScissor,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from "react-icons/ai";

const ImpactSection = () => {
  const data = [
    { id: 1, icon: <AiOutlineLineChart className="text-3xl text-white" />, target: 12000000, label: "Sales Generated" },
    { id: 2, icon: <AiOutlineScissor className="text-3xl text-white" />, target: 91, label: "Coupon Conversion", isPercentage: true },
    { id: 3, icon: <AiOutlineUser className="text-3xl text-white" />, target: 10, label: "Repeat Visits", multiplier: "X" },
    { id: 4, icon: <AiOutlineUserSwitch className="text-3xl text-white" />, target: 1000000, label: "Customers Engaged" },
  ];

  const [counters, setCounters] = useState(data.map(() => 0));

  // Format large numbers into readable format and avoid showing .0
  const formatNumber = (value) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(/\.0$/, "")}M`; // Format to 'M' for millions
    if (value >= 1000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`; // Format to 'K' for thousands
    return value.toFixed(0); // Ensure no decimals for smaller values
  };

  useEffect(() => {
    const duration = 1000; // Animation duration in milliseconds
    const frameRate = 40; // Frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const interval = duration / totalFrames;

    const increments = data.map((item) => item.target / totalFrames);

    let frame = 0;

    const intervalId = setInterval(() => {
      frame++;
      setCounters((prev) =>
        prev.map((value, index) =>
          frame < totalFrames
            ? Math.min(value + increments[index], data[index].target)
            : data[index].target
        )
      );

      if (frame >= totalFrames) {
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div className="bg-dblack font-poppins py-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-white">
          The Impact is Measureable
        </h2>
        <p className="text-white mt-2">
          Improve your KPIs, Increase Visits and Boost Sales
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-4 text-center">
        {data.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="bg-dblack outline outline-white p-4 rounded">
              {item.icon}
            </div>
            <h3 className="text-4xl text-white font-bold mt-4">
              {item.isPercentage
                ? `${Math.floor(counters[index])}%`
                : item.multiplier
                ? `${Math.floor(counters[index])}${item.multiplier}`
                : formatNumber(Math.floor(counters[index]))}
            </h3>
            <p className="text-white mt-2 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
