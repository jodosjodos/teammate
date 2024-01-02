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
      <div className="flex items-center justify-around space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-transform transform ${
              index === selectedItem ? "scale-100" : "scale-75"
            }`}
          >
            <img src={item} alt="" />
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
