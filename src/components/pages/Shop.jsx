// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation

// const menuItems = [
//   { id: 1, name: 'SugarFreeSweets', image: '/images/01.jpg', path: '/shop/sugarfreesweets' },
//   { id: 2, name: 'Special Items', image: '/images/02.png', path: '/special' },
//   { id: 3, name: 'Dry Fruits', image: '/images/03.png', path: '/dryfruits' },
//   { id: 4, name: 'Traditional', image: '/images/04.png', path: '/traditional' },
//   { id: 5, name: 'New Arrival', image: '/images/05.png', path: '/newarrival' },
//   { id: 6, name: 'Festive', image: '/images/06.png', path: '/festive' },
//   { id: 7, name: 'Gluten Free', image: '/images/07.png', path: '/glutenfree' },
//   { id: 8, name: 'Sugar Free', image: '/images/08.png', path: '/sugarfree' },
// ];


// const Shop = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="p-5">
//               {/* <h2 className="text-3xl w-full mx-auto text-gray-600 font-bold mb-6">Products</h2> */}
//               <h2 className="text-3xl w-full mx-auto text-gray-600 font-bold mb-6 text-center">Products</h2>


//       <div className="grid grid-cols-4 gap-6">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => navigate(item.path)}
//             className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-3 bg-white text-center font-semibold text-gray-800">
//               {item.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

















































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Shop = () => {
//   const navigate = useNavigate();
//   const [currentProduct, setCurrentProduct] = useState(0);


//   const menuItems = [
//     { id: 1, name: 'SugarFreeSweets', image: '/images/01.jpg', path: '/shop/sugarfreesweets' },
//     { id: 2, name: 'Special Items', image: '/images/02.png', path: '/special' },
//     { id: 3, name: 'Dry Fruits', image: '/images/03.png', path: '/dryfruits' },
//     { id: 4, name: 'Traditional', image: '/images/04.png', path: '/traditional' },
//     { id: 5, name: 'New Arrival', image: '/images/05.png', path: '/newarrival' },
//     { id: 6, name: 'Festive', image: '/images/06.png', path: '/festive' },
//     { id: 7, name: 'Gluten Free', image: '/images/07.png', path: '/glutenfree' },
//     { id: 8, name: 'Sugar Free', image: '/images/08.png', path: '/sugarfree' },
//   ];

//   const nextProduct = () => {
//     setCurrentProduct((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
//   };

//   const prevProduct = () => {
//     setCurrentProduct((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
//   };

//   return (
//     <div className="p-5 max-w-7xl mx-auto">
      

//       {/* Categories Grid */}
//       <h2 className="text-3xl text-center font-bold text-gray-800 mb-10 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
//         Shop Categories
//       </h2>
      
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => navigate(item.path)}
//             className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
//           >
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 flex items-center justify-center text-gray-500">
//               Category Image
//               <img src="/images/01.jpg" alt="" />
//             </div>
//             <div className="p-4 text-center font-semibold text-gray-800 bg-gradient-to-b from-white to-amber-50">
//               {item.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);

  const menuItems = [
    { id: 1, name: 'SugarFreeSweets', image: '/images/01.jpg', path: '/shop/sugarfreesweets' },
    { id: 2, name: 'Special Items', image: '/images/02.png', path: '/shop/special' },
    { id: 3, name: 'Dry Fruits', image: '/images/03.png', path: '/shop/dryfruits/' },
    { id: 4, name: 'Traditional', image: '/images/04.png', path: '/shop/traditional' },
    { id: 5, name: 'New Arrival', image: '/images/05.png', path: '/shop/newarrival' },
    { id: 6, name: 'Festive', image: '/images/06.png', path: '/shop/festive' },
    { id: 7, name: 'Gluten Free', image: '/images/07.png', path: '/shop/glutenfree' },
    { id: 8, name: 'Sugar Free', image: '/images/08.png', path: '/shop/sugarfree' },
  ];

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-10 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
        Shop Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center font-semibold text-gray-800 bg-gradient-to-b from-white to-amber-50">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
