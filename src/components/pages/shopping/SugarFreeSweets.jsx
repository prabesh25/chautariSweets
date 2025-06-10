// // // // // // import React from 'react';
// // // // // // import { Star } from 'lucide-react';


// // // // // // const products = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     name: 'Kaju Katli',
// // // // // //     price: 550,
// // // // // //     image: '/images/kaju-katli.jpg',
// // // // // //     rating: 4.8,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     name: 'Dry Fruit Laddu',
// // // // // //     price: 460,
// // // // // //     image: '/images/dry-fruit-laddu.jpg',
// // // // // //     rating: 4.6,
// // // // // //   },
// // // // // //   // Add more if needed
// // // // // // ];

// // // // // // const SugarFreeSweets = () => {
// // // // // //   return (
// // // // // //     <div className="px-4 md:px-10 py-6">
// // // // // //       <div className="text-sm mb-4 text-gray-700">Best selling</div>
// // // // // //       <div className="flex flex-wrap gap-6 justify-start">
// // // // // //         {products.map((item) => (
// // // // // //           <div
// // // // // //             key={item.id}
// // // // // //             className="bg-[#fdf8f3] rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0"
// // // // // //           >
// // // // // //             <img
// // // // // //               src={item.image}
// // // // // //               alt={item.name}
// // // // // //               className="w-full aspect-square object-cover"
// // // // // //             />
// // // // // //             <div className="p-3">
// // // // // //               <h2 className="text-gray-800 text-[15px]">{item.name}</h2>
// // // // // //               <div className="flex justify-between items-center mt-1">
// // // // // //                 <p className="text-red-600 font-semibold text-sm">
// // // // // //                   Rs.{item.price.toFixed(2)}
// // // // // //                 </p>
// // // // // //                 <div className="flex items-center text-sm text-gray-600">
// // // // // //                   <Star size={14} className="text-amber-400 mr-1" />
// // // // // //                   {item.rating}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SugarFreeSweets;
// // // // // import React from 'react';
// // // // // import { Star } from 'lucide-react';

// // // // // const products = [
// // // // //   {
// // // // //     id: 1,
// // // // //     name: 'Kaju Katli',
// // // // //     price: 550,
// // // // //     image: '/images/kaju-katli.jpg',
// // // // //     rating: 4.8,
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     name: 'Dry Fruit Laddu',
// // // // //     price: 460,
// // // // //     image: '/images/dry-fruit-laddu.jpg',
// // // // //     rating: 4.6,
// // // // //   },
// // // // //   // Add more if needed
// // // // // ];

// // // // // const SugarFreeSweets = () => {
// // // // //   return (
// // // // //     <div className="px-4 md:px-10 py-6">
// // // // //       <div className="text-sm mb-4 text-gray-700">Best selling</div>
// // // // //       <div className="flex flex-wrap gap-6 justify-start">
// // // // //         {products.map((item) => (
// // // // //           <div
// // // // //             key={item.id}
// // // // //             className="bg-[#fdf8f3] rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0 h-64"
// // // // //           >
// // // // //             <img
// // // // //               src={item.image}
// // // // //               alt={item.name}
// // // // //               className="w-full h-full object-cover"
// // // // //             />
// // // // //             <div className="p-3">
// // // // //               <h2 className="text-gray-800 text-[15px]">{item.name}</h2>
// // // // //               <div className="flex justify-between items-center mt-1">
// // // // //                 <p className="text-red-600 font-semibold text-sm">
// // // // //                   Rs.{item.price.toFixed(2)}
// // // // //                 </p>
// // // // //                 <div className="flex items-center text-sm text-gray-600">
// // // // //                   <Star size={14} className="text-amber-400 mr-1" />
// // // // //                   {item.rating}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SugarFreeSweets;
// // // // import React from 'react';
// // // // import { Star } from 'lucide-react';

// // // // const products = [
// // // //   {
// // // //     id: 1,
// // // //     name: 'Kaju Katli',
// // // //     price: 550,
// // // //     image: '/images/kaju-katli.jpg',
// // // //     rating: 4.8,
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: 'Dry Fruit Laddu',
// // // //     price: 460,
// // // //     image: '/images/dry-fruit-laddu.jpg',
// // // //     rating: 4.6,
// // // //   },
// // // // ];

// // // // const SugarFreeSweets = () => {
// // // //   return (
// // // //     <div className="px-4 md:px-10 py-6">
// // // //       <div className="text-sm mb-4 text-gray-700">Best selling</div>
// // // //       <div className="flex flex-wrap gap-6 justify-start">
// // // //         {products.map((item) => (
// // // //           <div
// // // //             key={item.id}
// // // //             className="bg-[#fdf8f3] rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0"
// // // //           >
// // // //             {/* Image container with fixed height */}
// // // //             <div className="w-full h-48 relative">
// // // //               <img
// // // //                 src={item.image}
// // // //                 alt={item.name}
// // // //                 className="w-full h-full object-cover"
// // // //               />
// // // //             </div>

// // // //             {/* Text content below image */}
// // // //             <div className="p-3">
// // // //               <h2 className="text-gray-800 text-[15px]">{item.name}</h2>
// // // //               <div className="flex justify-between items-center mt-1">
// // // //                 <p className="text-red-600 font-semibold text-sm">
// // // //                   Rs.{item.price.toFixed(2)}
// // // //                 </p>
// // // //                 <div className="flex items-center text-sm text-gray-600">
// // // //                   <Star size={14} className="text-amber-400 mr-1" />
// // // //                   {item.rating}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SugarFreeSweets;



























































// // // import React from 'react';
// // // import { Star } from 'lucide-react';

// // // const products = [
// // //   {
// // //     id: 1,
// // //     name: 'Kaju Katli',
// // //     price: 550,
// // //     image: '/images/012 (1).png',
// // //     rating: 4.8,
// // //   },
// // //   {
// // //     id: 2,
// // //     name: 'Dry Fruit Laddu',
// // //     price: 460,
// // //     image: '/images/011 (11).jpg',
// // //     rating: 4.6,
// // //   },
// // // ];

// // // const SugarFreeSweets = () => {
// // //   return (
// // //     <div className="px-4 md:px-10 py-6 max-w-[1200px] mx-auto">
// // //       <div className="text-sm mb-4 text-gray-700">Best selling</div>
// // //       <div className="flex flex-wrap gap-6 justify-center lg:justify-between">
// // //         {products.map((item) => (
// // //           <div
// // //             key={item.id}
// // //             className="bg-[#fdf8f3] rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300"
// // //           >
// // //             <div className="w-full  relative">
// // //               <img
// // //                 src={item.image}
// // //                 alt={item.name}
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>
          

// // //             <div className="p-4">
// // //               <h2 className="text-gray-800 text-[16px] font-semibold">{item.name}</h2>
// // //               <div className="flex justify-between items-center mt-2">
// // //                 <p className="text-red-600 font-semibold text-base">
// // //                   Rs.{item.price.toFixed(2)}
// // //                 </p>
// // //                 <div className="flex items-center text-sm text-gray-600">
// // //                   <Star size={16} className="text-amber-400 mr-1" />
// // //                   {item.rating}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SugarFreeSweets;



































// // import React from 'react';
// // import { Star } from 'lucide-react';

// // const products = [
// //   {
// //     id: 1,
// //     name: 'Kaju Katli',
// //     price: 550,
// //     image: '/images/012 (1).png',
// //     rating: 4.8,
// //   },
// //   {
// //     id: 2,
// //     name: 'Dry Fruit Laddu',
// //     price: 460,
// //     image: '/images/011 (11).jpg',
// //     rating: 4.6,
// //   },
// // ];

// // const SugarFreeSweets = () => {
// //   return (
// //     <div className="px-4 md:px-10 py-6 max-w-[1200px] mx-auto">
// //       <div className="text-sm mb-4 text-gray-700">Best selling</div>
// //       <div className="flex flex-wrap gap-6 justify-center lg:justify-between">
// //         {products.map((item) => (
// //           <div
// //             key={item.id}
// //             className="bg-[#fdf8f3] rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
// //           >
// //             {/* Image container that will take full available height */}
// //             <div className="w-full h-64 flex-shrink-0 relative overflow-hidden">
// //               <img
// //                 src={item.image}
// //                 alt={item.name}
// //                 className="w-full h-full object-cover"
// //                 style={{ minWidth: '100%', minHeight: '100%' }}
// //               />
// //             </div>
            
// //             <div className="p-4 flex-grow flex flex-col">
// //               <h2 className="text-gray-800 text-[16px] font-semibold">{item.name}</h2>
// //               <div className="flex justify-between items-center mt-2">
// //                 <p className="text-red-600 font-semibold text-base">
// //                   Rs.{item.price.toFixed(2)}
// //                 </p>
// //                 <div className="flex items-center text-sm text-gray-600">
// //                   <Star size={16} className="text-amber-400 mr-1" />
// //                   {item.rating}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SugarFreeSweets;












































// import React from 'react';
// import { Star } from 'lucide-react';

// const products = [
//   {
//     id: 1,
//     name: 'Kaju Katli',
//     price: 550,
//     image: '/images/012 (1).png',
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     name: 'Dry Fruit Laddu',
//     price: 460,
//     image: '/images/011 (11).jpg',
//     rating: 4.6,
//   },
// ];

// const SugarFreeSweets = () => {
//   return (
//     <div className="h-screen w-full overflow-hidden">
//       <div className="text-sm mb-4 text-gray-700 absolute top-4 left-4 z-10 bg-white/80 px-2 py-1 rounded">
//         Best selling
//       </div>
//       <div className="flex h-full w-full">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="w-1/2 p-5  h-full relative group overflow-hidden"
//           >
//             {/* Full screen image */}
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full rounded-3xl h-full object-cover"
//             />
            
//             {/* Product info overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
//               <h2 className="text-2xl font-bold">{item.name}</h2>
//               <div className="flex justify-between items-center mt-2">
//                 <p className="text-xl font-semibold">
//                   Rs.{item.price.toFixed(2)}
//                 </p>
//                 <div className="flex items-center">
//                   <Star size={20} className="text-amber-400 mr-1" />
//                   <span className="text-lg">{item.rating}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SugarFreeSweets;



















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