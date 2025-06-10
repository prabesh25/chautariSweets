














import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Kaju Katli',
    price: 550,
    image: '/images/012 (1).png',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Dry Fruit Laddu',
    price: 460,
    image: '/images/011 (11).jpg',
    rating: 4.6,
  },
   {
    id: 3,
    name: 'Kaju Katli',
    price: 550,
    image: '/images/012 (1).png',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Dry Fruit Laddu',
    price: 460,
    image: '/images/011 (11).jpg',
    rating: 4.6,
  },
];

const SugarFreeSweets = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="text-sm mb-4 text-gray-700 absolute top-4 left-4 z-10 bg-white/80 px-2 py-1 rounded">
        Best selling
      </div>
      <div className="flex h-full w-full">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-1/2 p-5 h-full relative group overflow-hidden flex flex-col"
          >
            {/* Full screen image container */}
            <div className="flex-1 rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product info below image */}
            <div className="bg-white p-4 rounded-b-3xl">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-semibold text-red-600">
                  Rs.{item.price.toFixed(2)}
                </p>
                <div className="flex items-center text-gray-600">
                  <Star size={20} className="text-amber-400 mr-1" />
                  <span className="text-lg">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SugarFreeSweets;