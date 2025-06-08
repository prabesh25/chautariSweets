import React from "react";

const Navbar = () => {
  return (
    <section className="px-5 bg-gray-300  py-2 w-full">
      <div id="moving-details " className="bg-orange-200">
        <p>just few moving details</p>
      </div>
      <div className="  flex justify-between items-center w-full h-[100px]  bg-emerald-400">
        <div id="shop etc & dropdown-menu" className="">
          <ul className="flex gap-5">
            <li>
              Shop
              <span></span>
            </li>
            <li>
              Local Orders
              <span></span>
            </li>
            <li>
              Gifting
              <span></span>
            </li>
          </ul>
        </div>
        <div id="logo" className="w-[120px]">
          {/* <p>logo</p> */}
          <img src="/images/mainLogo.png" alt="mainLogo" />
        </div>
        <div id="search-icon & account" className=" gap-5 flex">
          <div>My account & more</div>
          <div>Search Icon</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

// // import React, { useState, useEffect } from 'react';

// // // Navbar Component
// // const Navbar = () => {
// //   return (
// //     <nav className="fixed top-0 w-full bg-white bg-opacity-90 shadow-md z-50">
// //       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// //         <div className="flex items-center">
// //           <span className="text-amber-800 font-bold text-xl md:text-2xl">Bellam Kaju</span>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:flex space-x-8">
// //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Home</a>
// //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Products</a>
// //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">About</a>
// //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Contact</a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button className="md:hidden text-amber-800">
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //           </svg>
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Left section - SHOP LOCALORDERS ~ GIFTING */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-sm font-medium text-gray-700">
//               SHOP LOCALORDERS ~ GIFTING
//             </span>
//           </div>

//           {/* Center section - G.PULLA REDDY */}
//           <div className="flex items-center justify-center flex-grow">
//             <span className="text-xl font-bold text-red-600">
//               G.PULLA REDDY
//             </span>
//           </div>

//           {/* Right section - MY ACCOUNT & MORE */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <span className="text-sm font-medium text-gray-700">
//                 MY ACCOUNT & MORE <span className="text-red-600">></span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




