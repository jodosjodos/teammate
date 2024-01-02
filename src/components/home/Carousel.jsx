import React, { useState } from "react";

const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    "images/microsoft.png",
    "images/meta.png",
    "images/google.png",
  ]; // Add your items here

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="relative">
      <div className="flex lg:items-center md:items-start sm:items-start  lg:justify-around md:justify-start sm:justify-start lg:space-x-4 md:space-x-0 sm:space-x-0 lg:flex-row  md:flex-row sm:flex-col ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-transform transform md:w-full sm:w-full ${
              index === selectedItem ? "scale-100" : "scale-75"
            }`}
          >
            <img src={item} alt="" className="md:w-full sm:w-full" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full focus:outline-none ${
              index === selectedItem ? "bg-[#F1511B]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
