import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const menuItems = [
  { id: 1, name: 'SugarFreeSweets', image: '/images/01.jpg', path: '/shop/sugarfreesweets' },
  { id: 2, name: 'Special Items', image: '/images/02.png', path: '/special' },
  { id: 3, name: 'Dry Fruits', image: '/images/dryfruits.jpg', path: '/dryfruits' },
  { id: 4, name: 'Traditional', image: '/images/traditional.jpg', path: '/traditional' },
  { id: 5, name: 'New Arrival', image: '/images/newarrival.jpg', path: '/newarrival' },
  { id: 6, name: 'Festive', image: '/images/festive.jpg', path: '/festive' },
  { id: 7, name: 'Gluten Free', image: '/images/glutenfree.jpg', path: '/glutenfree' },
  { id: 8, name: 'Sugar Free', image: '/images/sugarfree.jpg', path: '/sugarfree' },
];


const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-6">Shop Categories</h2>
      <div className="grid grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 bg-white text-center font-semibold text-gray-800">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
