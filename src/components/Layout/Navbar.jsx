// // import React from "react";

// // const Navbar = () => {
// //   return (
// //     <section className="px-5 bg-gray-300  py-2 w-full">
// //       <div id="moving-details " className="bg-orange-200">
// //         <p>just few moving details</p>
// //       </div>
// //       <div className="  flex justify-between items-center w-full h-[100px]  bg-emerald-400">
// //         <div id="shop etc & dropdown-menu" className="">
// //           <ul className="flex gap-5">
// //             <li>
// //               Shop
// //               <span></span>
// //             </li>
// //             <li>
// //               Local Orders
// //               <span></span>
// //             </li>
// //             <li>
// //               Gifting
// //               <span></span>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="logo" className="w-[120px]">
// //           {/* <p>logo</p> */}
// //           <img src="/images/mainLogo.png" alt="mainLogo" />
// //         </div>
// //         <div id="search-icon & account" className=" gap-5 flex">
// //           <div>My account & more</div>
// //           <div>Search Icon</div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Navbar;

// // // // import React, { useState, useEffect } from 'react';

// // // // // Navbar Component
// // // // const Navbar = () => {
// // // //   return (
// // // //     <nav className="fixed top-0 w-full bg-white bg-opacity-90 shadow-md z-50">
// // // //       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// // // //         <div className="flex items-center">
// // // //           <span className="text-amber-800 font-bold text-xl md:text-2xl">Bellam Kaju</span>
// // // //         </div>

// // // //         {/* Desktop Navigation */}
// // // //         <div className="hidden md:flex space-x-8">
// // // //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Home</a>
// // // //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Products</a>
// // // //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">About</a>
// // // //           <a href="#" className="text-amber-800 hover:text-amber-600 font-medium">Contact</a>
// // // //         </div>

// // // //         {/* Mobile Menu Button */}
// // // //         <button className="md:hidden text-amber-800">
// // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// // // //           </svg>
// // // //         </button>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React from 'react';

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="bg-white border-b border-gray-200">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between h-16 items-center">
// // //           {/* Left section - SHOP LOCALORDERS ~ GIFTING */}
// // //           <div className="flex-shrink-0 flex items-center">
// // //             <span className="text-sm font-medium text-gray-700">
// // //               SHOP LOCALORDERS ~ GIFTING
// // //             </span>
// // //           </div>

// // //           {/* Center section - G.PULLA REDDY */}
// // //           <div className="flex items-center justify-center flex-grow">
// // //             <span className="text-xl font-bold text-red-600">
// // //               G.PULLA REDDY
// // //             </span>
// // //           </div>

// // //           {/* Right section - MY ACCOUNT & MORE */}
// // //           <div className="flex items-center">
// // //             <div className="flex-shrink-0">
// // //               <span className="text-sm font-medium text-gray-700">
// // //                 MY ACCOUNT & MORE <span className="text-red-600">></span>
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#fefaf6] shadow-sm sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Left Links */}
//           <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
//             <div className="flex items-center cursor-pointer">
//               SHOP <span className="ml-1">▼</span>
//             </div>
//             <div className="flex items-center cursor-pointer">
//               LOCAL ORDERS <span className="ml-1">▼</span>
//             </div>
//             <span className="cursor-pointer">GIFTING</span>
//           </div>

//           {/* Center Logo */}
//           <div className="text-center">
//             <div className="text-[10px] italic text-gray-700">Since 1948</div>
//             <div className="text-lg font-bold text-red-700 tracking-wide">
//               G. PULLA REDDY
//             </div>
//             <div className="text-[10px] tracking-widest text-gray-800 font-semibold">
//               A SWEET TRADITION
//             </div>
//           </div>

//           {/* Right Links */}
//           <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 items-center">
//             <div className="flex items-center cursor-pointer">
//               MY ACCOUNT & MORE <span className="ml-1">▼</span>
//             </div>
//             <button>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 text-sm font-medium text-gray-800">
//             <div className="flex justify-between items-center">
//               <span>SHOP</span>
//               <span>▼</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span>LOCAL ORDERS</span>
//               <span>▼</span>
//             </div>
//             <span>GIFTING</span>
//             <div className="flex justify-between items-center">
//               <span>MY ACCOUNT & MORE</span>
//               <span>▼</span>
//             </div>
//             <button className="w-fit">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
//                 />
//               </svg>
//             </button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fefaf6] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
            <div className="flex items-center cursor-pointer">
              SHOP <span className="ml-1">▼</span>
            </div>
            <div className="flex items-center cursor-pointer">
              LOCAL ORDERS <span className="ml-1">▼</span>
            </div>
            <span className="cursor-pointer">GIFTING</span>
          </div>

          {/* Center Logo Image */}
          <div className="flex justify-center items-center">
            <img
              src="images/mainLogo.png" // <-- replace with your actual logo image path
              alt="chautari sweets Logo"
              className="w-18  object-contain"
            />
          </div>

          {/* Right Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 items-center">
            <div className="flex items-center cursor-pointer">
              MY ACCOUNT & MORE <span className="ml-1">▼</span>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 text-sm font-medium text-gray-800">
            <div className="flex justify-between items-center">
              <span>SHOP</span>
              <span>▼</span>
            </div>
            <div className="flex justify-between items-center">
              <span>LOCAL ORDERS</span>
              <span>▼</span>
            </div>
            <span>GIFTING</span>
            <div className="flex justify-between items-center">
              <span>MY ACCOUNT & MORE</span>
              <span>▼</span>
            </div>
            <button className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}




