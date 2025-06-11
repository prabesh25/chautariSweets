import React, { useRef } from 'react';
import SugarFreeSweets from './shopping/SugarFreeSweets';
import {
  Package,
  Users,
  Heart,
  Leaf,
} from "lucide-react"; // optional icons, can use any


const Product = () => {
  
  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      text: "Happiness ships within in 1-2 days",
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Loved by 5 lakh+ customers",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      text: "Every piece is made with love",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      text: "No Preservatives and naturally fresh",
    },
  ];


  const scrollRef = useRef(null);
  
  const products = [
    { id: 1, name: 'Ariseiu', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357638_1280.jpg' },
    { id: 2, name: 'Kaju Boondi', price: 'Rs.295.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357639_1280.jpg' },
    { id: 3, name: 'Soan Patti', price: 'Rs.440.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357640_1280.jpg' },
    { id: 4, name: 'Ghee Salt Kaju', price: 'Rs.225.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357641_1280.jpg' },
    { id: 5, name: 'Mitha Peda', price: 'Rs.325.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357642_1280.jpg' },
    { id: 6, name: 'Dry Fruit Mix', price: 'Rs.495.00', image: 'https://cdn.pixabay.com/photo/2018/04/28/14/12/snack-3357643_1280.jpg' },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
        <div>
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      {/* Image Section */}
      <div className="flex flex-col md:w-1/2">
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/01.jpg" alt="Chocolate Chip Cookies" className="w-full md:w-3/4 mb-4" />
          
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col md:w-1/2 mt-4 md:mt-0 md:ml-8">
        <div className="text-red-500 text-sm mb-2">CAKE AND COOKIE TREATS</div>
        <h1 className="text-2xl font-bold mb-2">Chocolate Chip Cookies</h1>
        <p className="text-gray-700 mb-4">
          Treat yourself to our classic Chocolate Chip Cookies, where rich chocolate chunks are nestled within buttery, soft dough.
        </p>
        <div className="text-xl font-semibold mb-4">Rs.140.00</div>
        <div className="text-gray-500 text-sm mb-4">Tax included.</div>
        <div className="flex items-center mb-4">
          <span className="text-gray-700 mr-2">WEIGHT</span>
          <span className="bg-gray-200 px-2 py-1 rounded">150gm</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-700 mr-2">QUANTITY</span>
          <div className="flex items-center">
            <button className="bg-gray-200 px-2 py-1 rounded-l">-</button>
            <span className="bg-gray-100 px-4 py-1">1</span>
            <button className="bg-gray-200 px-2 py-1 rounded-r">+</button>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded mb-4">ADD TO BAG</button>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">30 Days Of Shelf Life</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Delivery Within 3-5 Days</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">International Shipping</span>
          </div>
        </div>
      </div>
    </div>


     <div className="max-w-screen-lg mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Text Section */}
      <div className="md:w-1/2">
       
        <p className=" ">Experience the cherished flavors of tradition with our Bellam Kaju, a beloved sweet that symbolizes the essence of Indian festivities. Crafted with the finest cashews, our Bellam Kaju is lovingly combined with natural jaggery, creating a wholesome and delightful treat. This traditional recipe brings out a rich, nutty flavor, perfectly balanced with the deep sweetness of jaggery, offering a taste that is both authentic and heartwarming.</p>
        <p className="font-semibold text-red-500 mt-5 text-xl">Chautari Sweets never disappoints</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/images/01.jpg"  // Replace with actual image path
          alt="Bellam Kaju Sweet"
          className="rounded-lg w-full object-cover"
        />
      </div>





    </div>


{/* likethese too */}

    <div className="w-full max-w-6xl bg-white mx-auto rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We Think You'll Like These Too!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are some of our favorite treats too, add it to your cart to make it an extra sweet party!
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all focus:outline-none"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-all focus:outline-none"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Products container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-lg font-medium text-amber-700 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


    {/* 4box */}
<div className="bg-red-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {item.icon}
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

</div>
  );
};

export default Product;




// import React from "react";
// import {
//   Package,
//   Users,
//   Heart,
//   Leaf,
// } from "lucide-react"; // optional icons, can use any

// const FeaturesBanner = () => {
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

//   return (
//     <div className="bg-red-700 text-white py-6 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {features.map((item, index) => (
//           <div key={index} className="flex flex-col items-center space-y-2">
//             {item.icon}
//             <p className="text-sm font-medium">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesBanner;










