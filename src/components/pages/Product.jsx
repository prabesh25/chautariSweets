// import React, { useRef } from 'react';
// import SugarFreeSweets from './shopping/SugarFreeSweets';
// import {
//   Package,
//   Users,
//   Heart,
//   Leaf,
// } from "lucide-react"; // optional icons, can use any


// const Product = () => {
  
//   const features = [
//     {
//       icon: <Package className="w-8 h-8" />,
//       text: "Happiness ships within in 1-2 days",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       text: "Loved by 5 lakh+ customers",
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       text: "Every piece is made with love",
//     },
//     {
//       icon: <Leaf className="w-8 h-8" />,
//       text: "No Preservatives and naturally fresh",
//     },
//   ];


//   const scrollRef = useRef(null);
  
//   const products = [
//     { id: 1, name: 'Ariseiu', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357638_1280.jpg' },
//     { id: 2, name: 'Kaju Boondi', price: 'Rs.295.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357639_1280.jpg' },
//     { id: 3, name: 'Soan Patti', price: 'Rs.440.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357640_1280.jpg' },
//     { id: 4, name: 'Ghee Salt Kaju', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357641_1280.jpg' },
//     { id: 5, name: 'Mitha Peda', price: 'Rs.325.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357642_1280.jpg' },
//     { id: 6, name: 'Dry Fruit Mix', price: 'Rs.495.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357643_1280.jpg' },
//   ];

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };
  
//   return (
//         <div>
//     <div className="flex flex-col md:flex-row p-4 md:p-8">
//       {/* Image Section */}
//       <div className="flex flex-col md:w-1/2">
//         <div className="flex flex-col items-center md:items-start">
//           <img src="/images/01.jpg" alt="Chocolate Chip Cookies" className="w-full md:w-3/4 mb-4" />
          
//         </div>
//       </div>

//       {/* Product Info Section */}
//       <div className="flex flex-col md:w-1/2 mt-4 md:mt-0 md:ml-8">
//         <div className="text-red-500 text-sm mb-2">CAKE AND COOKIE TREATS</div>
//         <h1 className="text-2xl font-bold mb-2">Chocolate Chip Cookies</h1>
//         <p className="text-gray-700 mb-4">
//           Treat yourself to our classic Chocolate Chip Cookies, where rich chocolate chunks are nestled within buttery, soft dough.
//         </p>
//         <div className="text-xl font-semibold mb-4">Rs.140.00</div>
//         <div className="text-gray-500 text-sm mb-4">Tax included.</div>
//         <div className="flex items-center mb-4">
//           <span className="text-gray-700 mr-2">WEIGHT</span>
//           <span className="bg-gray-200 px-2 py-1 rounded">150gm</span>
//         </div>
//         <div className="flex items-center mb-4">
//           <span className="text-gray-700 mr-2">QUANTITY</span>
//           <div className="flex items-center">
//             <button className="bg-gray-200 px-2 py-1 rounded-l">-</button>
//             <span className="bg-gray-100 px-4 py-1">1</span>
//             <button className="bg-gray-200 px-2 py-1 rounded-r">+</button>
//           </div>
//         </div>
//         <button className="bg-black text-white px-4 py-2 rounded mb-4">ADD TO BAG</button>
//         <div className="flex space-x-4">
//           <div className="flex items-center">
//             <span className="text-gray-700 mr-2">30 Days Of Shelf Life</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-700 mr-2">Delivery Within 3-5 Days</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-gray-700 mr-2">International Shipping</span>
//           </div>
//         </div>
//       </div>
//     </div>


//      <div className="max-w-screen-lg mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
//       {/* Text Section */}
//       <div className="md:w-1/2">
       
//         <p className=" ">Experience the cherished flavors of tradition with our Bellam Kaju, a beloved sweet that symbolizes the essence of Indian festivities. Crafted with the finest cashews, our Bellam Kaju is lovingly combined with natural jaggery, creating a wholesome and delightful treat. This traditional recipe brings out a rich, nutty flavor, perfectly balanced with the deep sweetness of jaggery, offering a taste that is both authentic and heartwarming.</p>
//         <p className="font-semibold text-red-500 mt-5 text-xl">Chautari Sweets never disappoints</p>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2">
//         <img
//           src="/images/01.jpg"  // Replace with actual image path
//           alt="Bellam Kaju Sweet"
//           className="rounded-lg w-full object-cover"
//         />
//       </div>





//     </div>


// {/* likethese too */}

//     <div className="w-full max-w-6xl bg-white mx-auto rounded-2xl shadow-xl overflow-hidden">
//       <div className="p-8 md:p-12">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We Think You'll Like These Too!</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             These are some of our favorite treats too, add it to your cart to make it an extra sweet party!
//           </p>
//         </div>

//         <div className="relative">
//           {/* Navigation buttons */}
//           <button 
//             onClick={scrollLeft}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all focus:outline-none"
//             aria-label="Scroll left"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
          
//           <button 
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all focus:outline-none"
//             aria-label="Scroll right"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
          
//           {/* Products container */}
//           <div 
//             ref={scrollRef}
//             className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-1 scroll-smooth"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {products.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//                   <p className="text-lg font-medium text-amber-700 mt-2">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>


//     {/* 4box */}
// <div className="bg-red-700 text-white py-6 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {features.map((item, index) => (
//           <div key={index} className="flex flex-col items-center space-y-2">
//             {item.icon}
//             <p className="text-sm font-medium">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>

// </div>
//   );
// };

// export default Product;




// // import React from "react";
// // import {
// //   Package,
// //   Users,
// //   Heart,
// //   Leaf,
// // } from "lucide-react"; // optional icons, can use any

// // const FeaturesBanner = () => {
// //   const features = [
// //     {
// //       icon: <Package className="w-8 h-8" />,
// //       text: "Happiness ships within in 1-2 days",
// //     },
// //     {
// //       icon: <Users className="w-8 h-8" />,
// //       text: "Loved by 5 lakh+ customers",
// //     },
// //     {
// //       icon: <Heart className="w-8 h-8" />,
// //       text: "Every piece is made with love",
// //     },
// //     {
// //       icon: <Leaf className="w-8 h-8" />,
// //       text: "No Preservatives and naturally fresh",
// //     },
// //   ];

// //   return (
// //     <div className="bg-red-700 text-white py-6 px-4">
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //         {features.map((item, index) => (
// //           <div key={index} className="flex flex-col items-center space-y-2">
// //             {item.icon}
// //             <p className="text-sm font-medium">{item.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturesBanner;










////////////////////////////////////////////////////////////////////////////////////////////////////////






















import React, { useRef } from 'react';
import {
  Package, Users, Heart, Leaf, Star, ChevronLeft, ChevronRight, ShoppingBag, Truck, Globe
} from "lucide-react";

const Product = () => {
  const scrollRef = useRef(null);
  
  const features = [
    { icon: <Package className="w-8 h-8" />, text: "Happiness within in 1-2 days" },
    { icon: <Users className="w-8 h-8" />, text: "Loved by 5 lakh+ customers" },
    { icon: <Heart className="w-8 h-8" />, text: "Every piece is made with love" },
    { icon: <Leaf className="w-8 h-8" />, text: "No Preservatives and naturally fresh" },
  ];

  // const products = [
  //   { id: 1, name: 'Ariseiu', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357638_1280.jpg' },
  //   { id: 2, name: 'Kaju Boondi', price: 'Rs.295.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357639_1280.jpg' },
  //   { id: 3, name: 'Soan Patti', price: 'Rs.440.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357640_1280.jpg' },
  //   { id: 4, name: 'Ghee Salt Kaju', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357641_1280.jpg' },
  //   { id: 5, name: 'Mitha Peda', price: 'Rs.325.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357642_1280.jpg' },
  //   { id: 6, name: 'Dry Fruit Mix', price: 'Rs.495.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357643_1280.jpg' },
  // ];
  
const products = [
  {
    id: 1,
    name: 'Kaju Katli',
    price: 550,
    image: '/images/01.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Dry Fruit Laddu',
    price: 460,
    image: '/images/02.png',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Kaju Katli',
    price: 550,
    image: '/images/01.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Dry Fruit Laddu',
    price: 460,
    image: '/images/02.png',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Kaju Katli',
    price: 550,
    image: '/images/01.jpg',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Dry Fruit Laddu',
    price: 460,
    image: '/images/02.png',
    rating: 4.6,
  },
];

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">




{/* 
      <div className="flex flex-col md:flex-row gap-8 py-10 md:py-16">
        <div className="w-[50%] h-[100%] bg-cover flex flex-col bg-blue-200">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="/images/01.jpg" 
              alt="Chocolate Chip Cookies" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-red-500 font-medium tracking-wide mb-1">CAKE AND COOKIE TREATS</div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Chocolate Chip Cookies</h1>
              </div>
              <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="ml-1 text-sm font-medium text-amber-700">4.9</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Treat yourself to our classic Chocolate Chip Cookies, where rich chocolate chunks are nestled within buttery, soft dough.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900">Rs.140.00</div>
              <div className="ml-3 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                10% OFF
              </div>
            </div>
            
            <div className="text-gray-500 text-sm mb-6">Tax included.</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-gray-700 font-medium mb-2">WEIGHT</div>
                <div className="flex gap-2">
                  {['150gm', '250gm', '500gm'].map(size => (
                    <button 
                      key={size}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        size === '150gm' 
                          ? 'bg-amber-500 text-white shadow-md' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-gray-700 font-medium mb-2">QUANTITY</div>
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-fit">
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors">
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium">1</span>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-4">
              <ShoppingBag className="w-5 h-5 mr-2" />
              ADD TO BAG
            </button>
            
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center text-gray-700">
                <div className="bg-amber-100 p-2 rounded-full mr-2">
                  <Truck className="w-5 h-5 text-amber-600" />
                </div>
                <span>Delivery Within 3-5 Days</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="bg-amber-100 p-2 rounded-full mr-2">
                  <Globe className="w-5 h-5 text-amber-600" />
                </div>
                <span>International Shipping</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="bg-amber-100 p-2 rounded-full mr-2">
                  <Package className="w-5 h-5 text-amber-600" />
                </div>
                <span>30 Days Shelf Life</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row gap-8 py-10 md:py-16">
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex">
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden w-full h-full">
      <img 
        src="/images/01.jpg" 
        alt="Chocolate Chip Cookies" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Product Info Section */}
  <div className="w-full md:w-1/2 flex">
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-red-500 font-medium tracking-wide mb-1">
            CAKE AND COOKIE TREATS
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Chocolate Chip Cookies
          </h1>
        </div>
        <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="ml-1 text-sm font-medium text-amber-700">4.9</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Treat yourself to our classic Chocolate Chip Cookies, where rich chocolate chunks are nestled within buttery, soft dough.
      </p>

      <div className="flex items-center mb-6">
        <div className="text-2xl font-bold text-gray-900">Rs.140.00</div>
        <div className="ml-3 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
          10% OFF
        </div>
      </div>

      <div className="text-gray-500 text-sm mb-6">Tax included.</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-gray-700 font-medium mb-2">WEIGHT</div>
          <div className="flex gap-2">
            {['150gm', '250gm', '500gm'].map(size => (
              <button 
                key={size}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  size === '150gm' 
                    ? 'bg-amber-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-gray-700 font-medium mb-2">QUANTITY</div>
          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-fit">
            <button className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors">
              -
            </button>
            <span className="px-4 py-2 text-gray-900 font-medium">1</span>
            <button className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors">
              +
            </button>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-4">
        <ShoppingBag className="w-5 h-5 mr-2" />
        ADD TO BAG
      </button>

      <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center text-gray-700">
          <div className="bg-amber-100 p-2 rounded-full mr-2">
            <Truck className="w-5 h-5 text-amber-600" />
          </div>
          <span>Delivery Within 3-5 Days</span>
        </div>
        <div className="flex items-center text-gray-700">
          <div className="bg-amber-100 p-2 rounded-full mr-2">
            <Globe className="w-5 h-5 text-amber-600" />
          </div>
          <span>International Shipping</span>
        </div>
        <div className="flex items-center text-gray-700">
          <div className="bg-amber-100 p-2 rounded-full mr-2">
            <Package className="w-5 h-5 text-amber-600" />
          </div>
          <span>30 Days Shelf Life</span>
        </div>
      </div>
    </div>
  </div>
</div>




















      {/* Product Story Section */}
      <div className="bg-gradient-to-br rounded-3xl shadow-lg overflow-hidden my-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Story Behind Our Bellam Kaju</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience the cherished flavors of tradition with our Bellam Kaju, a beloved sweet that symbolizes the essence of Indian festivities. Crafted with the finest cashews, our Bellam Kaju is lovingly combined with natural jaggery, creating a wholesome and delightful treat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This traditional recipe brings out a rich, nutty flavor, perfectly balanced with the deep sweetness of jaggery, offering a taste that is both authentic and heartwarming.
            </p>
            <div className="mt-8">
              <p className="font-bold text-xl text-amber-600 italic">"Chautari Sweets never disappoints"</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/images/01.jpg"
              alt="Bellam Kaju Sweet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent md:bg-gradient-to-r md:from-transparent "></div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">We Think You'll Like These Too!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are some of our favorite treats too, add them to your cart to make it an extra sweet party!
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-amber-50 transition-all focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-amber-50 transition-all focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-1 scroll-smooth"
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-amber-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-amber-700">{product.price}</p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-2">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className=" bg-red-700 text-white rounded-3xl shadow-xl overflow-hidden my-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-5">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <p className=" font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;