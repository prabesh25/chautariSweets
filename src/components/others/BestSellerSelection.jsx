// import React, { useRef } from 'react';

// const BestsellerSection = () => {
//   const scrollRef = useRef(null);
  
//   const products = [
//     { 
//       name: "Assorted", 
//       price: "₹470.00",
//       rating: "4.3",
//       image: "/images/assorted.jpg" 
//     },
//     { 
//       name: "Tomato Pickle Pouch", 
//       price: "₹370.00",
//       rating: "4.3",
//       image: "/images/tomato-pickle.jpg" 
//     },
//     { 
//       name: "Assorted Pootharekulu", 
//       price: "₹500.00",
//       rating: "4.3",
//       image: "/images/pootharekulu.jpg" 
//     },
//     { 
//       name: "Soan Papdi", 
//       price: "₹440.00",
//       rating: "4.3",
//       image: "/images/soan-papdi.jpg" 
//     },
//     // Add more products as needed
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { current } = scrollRef;
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative bg-white py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Bestseller</h2>
        
//         <div className="relative">
//           {/* Navigation buttons */}
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
//           >
//             &lt;
//           </button>
          
//           <button 
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
//           >
//             &gt;
//           </button>
          
//           {/* Product cards */}
//           <div 
//             ref={scrollRef}
//             className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-hide"
//             style={{ scrollbarWidth: 'none' }}
//           >
//             {products.map((product, index) => (
//               <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="h-48 bg-gray-200">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{product.name}</h3>
//                   <p className="text-gray-800 font-medium">{product.price}</p>
//                   <div className="flex items-center mt-2">
//                     <span className="text-yellow-500">★</span>
//                     <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestsellerSection;

import React, { useRef } from 'react';

const BestsellerSection = () => {
  const scrollRef = useRef(null);
  
  const products = [
    { 
      name: "Assorted", 
      price: "₹470.00",
      rating: "4.3",
      image: "/images/0102.png" 
    },
    { 
      name: "Tomato Pickle Pouch", 
      price: "₹370.00",
      rating: "4.3",
      image: "/images/0103.png" 
    },
    { 
      name: "Assorted Pootharekulu", 
      price: "₹500.00",
      rating: "4.3",
      image: "/images/0105.png" 
    },
    { 
      name: "Soan Papdi", 
      price: "₹440.00",
      rating: "4.3",
      image: "/images/0106.png" 
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with title and buttons - exactly matching the image */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl text-gray-600 font-bold">Our Bestseller</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              &lt;
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Product cards */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 py-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-70 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="h-40 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <p className="text-gray-800 font-semibold mt-1">{product.price}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellerSection;