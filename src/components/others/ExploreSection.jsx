
import React from "react";

const ExploreSection = () => {
  const exploreItems = [
    { name: "Namkeen", image: "/images/explore-namkeen.jpg" },
    { name: "Sweets", image: "/images/explore-sweets.jpg" },
    { name: "Gift Packs", image: "/images/explore-gift.jpg" },
    { name: "Dry Fruits", image: "/images/explore-dryfruit.jpg" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      {/* Centered heading content */}
      <div className="w-full max-w-2xl text-center mb-8">
        <h4 className="text-lg font-bold mb-2">Taste the legacy today!</h4>
        <p className="text-gray-600">
          Since 1948, our Indian brand has been delighting customers with
          exquisite mithai, spice powders, namkeens, and tangy pickles.
        </p>
      </div>

      {/* Centered scrollable container */}
      <div className="w-full flex justify-center">
        {/* <div className="flex overflow-x-auto pb-4 space-x-4 max-w-full"> */}
        <div className="flex overflow-x-auto no-scrollbar pb-4 space-x-4 max-w-full">

          {/* Left padding spacer */}
          <div className="flex-shrink-0   w-4 md:w-[calc((100%-1024px)/2)]"></div>
          
          {exploreItems.map((item) => (
            <div
              key={item.name}
              className="relative no-scrollbar w-60 h-80 overflow-hidden rounded-lg border group flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-emerald-700 font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore {item.name}
              </button>
            </div>
          ))}
          
          {/* Right padding spacer */}
          <div className="flex-shrink-0 w-4 md:w-[calc((100%-1024px)/2)]"></div>
        </div>
      </div>
    </div>
  );
};


export default ExploreSection;