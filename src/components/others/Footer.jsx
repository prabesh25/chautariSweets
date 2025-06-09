// // // // // src/components/SweetTraditionFooter.jsx
// // // // import React from 'react';

// // // // const Footer = () => {
// // // //   return (
// // // //     <footer className="font-sans bg-[#f8f5f0] text-[#4a3c2a] border-t-2 border-[#e0d6c6]">
// // // //       {/* Main Footer Content */}
// // // //       <div className="max-w-7xl mx-auto px-4 py-8">
// // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
// // // //           {/* PRODUCTS Column */}
// // // //           <div>
// // // //             <h3 className="font-bold text-lg mb-4 tracking-wider border-b border-[#d4c9b6] pb-2">PRODUCTS</h3>
// // // //             <ul className="space-y-2">
// // // //               <li className="font-medium">SHOP ONLINE</li>
// // // //               <li className="pl-4">OHOCK LUNKS</li>
// // // //               <li className="pl-4">POLICIES</li>
// // // //               <li className="pl-4">Corporate Office</li>
// // // //             </ul>
// // // //           </div>
          
// // // //           {/* All Products Column */}
// // // //           <div>
// // // //             <h3 className="font-bold text-lg mb-4 tracking-wider border-b border-[#d4c9b6] pb-2">All Products</h3>
// // // //             <ul className="space-y-2">
// // // //               <li>Pinheels</li>
// // // //               <li className="font-medium mt-4">About Us</li>
// // // //               <li className="font-medium mt-4">Privacy Policy</li>
// // // //               <li className="text-sm mt-4">
// // // //                 S = $270, G. Ana Ruedig, Guiding, 3rd Floor,<br />
// // // //                 BDOCR-6, Greenland Bank, Puripipistia
// // // //               </li>
// // // //             </ul>
// // // //           </div>
          
// // // //           {/* Plan & Status Column */}
// // // //           <div>
// // // //             <h3 className="font-bold text-lg mb-4 tracking-wider border-b border-[#d4c9b6] pb-2">Plan & Status</h3>
// // // //             <ul className="space-y-2">
// // // //               <li>Cake and Cookie Tracks</li>
// // // //               <li className="font-medium mt-4">International</li>
// // // //               <li className="font-medium mt-4">Contact Us</li>
// // // //               <li className="font-medium mt-4">Terms and Conditions</li>
// // // //               <li className="font-medium">Bootstrap Policy</li>
// // // //               <li className="font-medium">Signing Policy</li>
// // // //               <li className="text-sm mt-4">
// // // //                 SECOND, Telegram, Sub
// // // //               </li>
// // // //             </ul>
// // // //           </div>
          
// // // //           {/* Right Column */}
// // // //           <div>
// // // //             <h3 className="font-bold text-lg mb-4 tracking-wider border-b border-[#d4c9b6] pb-2">&nbsp;</h3>
// // // //             <ul className="space-y-2">
// // // //               <li>Classic Business</li>
// // // //               <li>Hyderabad</li>
// // // //               <li className="font-medium mt-4">Store Locations</li>
// // // //               <li className="font-medium">Offing</li>
// // // //               <li className="font-medium">Payment Policy</li>
// // // //               <li className="font-medium">Refund Policy</li>
// // // //               <li className="text-sm mt-4">
// // // //                 <q>170233 SDSS</q>
// // // //               </li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Brand Gallery Section */}
// // // //         <div className="mb-8">
// // // //           <h3 className="font-bold text-lg mb-4 tracking-wider border-b border-[#d4c9b6] pb-2">Brand Gallery</h3>
// // // //           <div className="flex space-x-4">
// // // //             <div className="bg-[#e0d6c6] border border-[#d4c9b6] w-16 h-16"></div>
// // // //             <div className="bg-[#e0d6c6] border border-[#d4c9b6] w-16 h-16"></div>
// // // //             <div className="bg-[#e0d6c6] border border-[#d4c9b6] w-16 h-16"></div>
// // // //             <div className="bg-[#e0d6c6] border border-[#d4c9b6] w-16 h-16"></div>
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Bottom Links */}
// // // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#d4c9b6] pt-4">
// // // //           <div className="mb-4 md:mb-0">
// // // //             <ul className="flex flex-wrap gap-4">
// // // //               <li className="font-medium">Shop</li>
// // // //               <li className="font-medium">Safety Guidelines</li>
// // // //             </ul>
// // // //           </div>
// // // //           <div className="text-sm">
// // // //             <p>© {new Date().getFullYear()} Sweet Tradition. All rights reserved.</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
      
// // // //       {/* Customer Care Banner */}
// // // //       <div className="bg-[#4a3c2a] text-[#f8f5f0] py-4">
// // // //         <div className="max-w-7xl mx-auto px-4 text-center">
// // // //           <h3 className="font-bold text-xl tracking-wider">CUSTOMER CARE</h3>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // };

// // // // export default Footer;



import React from 'react';

const Footer = () => {
  return (
    <div className="font-sans bg-[#f8f5f0] text-[#4a3c2a]">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <h1 className="text-3xl font-bold">A SWEET TRADITION</h1>
        <p className="text-lg mt-2 mb-6">
          Rooted in our sweet traditions, we draw inspiration from the classified practices of our ancestors.
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-[#d4c9b6]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Products Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-[#d4c9b6] pb-2">PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Column 1 */}
              <div>
                <h3 className="font-semibold">SHOP ONLINE</h3>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>OHOCK LUNKS</li>
                  <li>POLICIES</li>
                  <li>Corporate Office</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold">All Products</h3>
                <ul className="mt-2 space-y-1">
                  <li>Pinheels</li>
                </ul>
                <h3 className="font-semibold mt-4">About Us</h3>
                <h3 className="font-semibold mt-4">Privacy Policy</h3>
                <p className="text-xs mt-4">
                  S = $270, G. Ana Ruedig, Guiding, 3rd Floor,<br />
                  BDOCR-6, Greenland Bank, Puripipistia
                </p>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-semibold">Plan & Status</h3>
                <ul className="mt-2 space-y-1">
                  <li>Cake and Cookie Tracks</li>
                </ul>
                <h3 className="font-semibold mt-4">International</h3>
                <h3 className="font-semibold mt-4">Contact Us</h3>
                <h3 className="font-semibold mt-4">Terms and Conditions</h3>
                <h3 className="font-semibold mt-4">Bootstrap Policy</h3>
                <h3 className="font-semibold mt-4">Signing Policy</h3>
                <p className="text-xs mt-4">SECOND, Telegram, Sub</p>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-semibold">Classic Business</h3>
                <ul className="mt-2 space-y-1">
                  <li>Hyderabad</li>
                </ul>
                <h3 className="font-semibold mt-4">Store Locations</h3>
                <h3 className="font-semibold mt-4">Offing</h3>
                <h3 className="font-semibold mt-4">Payment Policy</h3>
                <h3 className="font-semibold mt-4">Refund Policy</h3>
                <p className="text-xs mt-4"><q>170233 SDSS</q></p>
              </div>
            </div>
          </div>

          {/* Brand Gallery */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-[#d4c9b6] pb-2">Brand Gallery</h2>
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-[#e0d6c6] border border-[#d4c9b6]"></div>
              ))}
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#d4c9b6] pt-4">
            <div className="flex gap-4 mb-4 md:mb-0">
              <span className="font-semibold">Shop</span>
              <span className="font-semibold">Safety Guidelines</span>
            </div>
            <div className="text-sm">
              <p>© {new Date().getFullYear()} Sweet Tradition. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Care Banner */}
      <div className="bg-[#4a3c2a] text-[#f8f5f0] py-4 text-center">
        <h3 className="text-xl font-bold">CUSTOMER CARE</h3>
      </div>
    </div>
  );
};

export default Footer;



// import React, { useState } from 'react'

// const Footer = () => {
//   return (
// // import React, { useState } from "react";
// // import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#fefaf6] shadow-sm sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
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

//           {/* Center Logo Image */}
//           <div className="flex justify-center items-center">
//             <img
//               src="/logo.png" // <-- replace with your actual logo image path
//               alt="G. Pulla Reddy Logo"
//               className="h-14 object-contain"
//             />
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
//   )
// }

// export default Footer;


// // import React, { useState } from 'react'
// // import { Menu, X } from "lucide-react";

// // const Footer = () => {
// //  const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="bg-[#fefaf6] shadow-sm sticky top-0 z-50">
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Left Links */}
// //           <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
// //             <div className="flex items-center cursor-pointer">
// //               SHOP <span className="ml-1">▼</span>
// //             </div>
// //             <div className="flex items-center cursor-pointer">
// //               LOCAL ORDERS <span className="ml-1">▼</span>
// //             </div>
// //             <span className="cursor-pointer">GIFTING</span>
// //           </div>

// //           {/* Center Logo Image */}
// //           <div className="flex justify-center items-center">
// //             <img
// //               src="/logo.png" // <-- replace with your actual logo image path
// //               alt="G. Pulla Reddy Logo"
// //               className="h-14 object-contain"
// //             />
// //           </div>

// //           {/* Right Links */}
// //           <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 items-center">
// //             <div className="flex items-center cursor-pointer">
// //               MY ACCOUNT & MORE <span className="ml-1">▼</span>
// //             </div>
// //             <button>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-5 h-5"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
// //                 />
// //               </svg>
// //             </button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button onClick={() => setMenuOpen(!menuOpen)}>
// //               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {menuOpen && (
// //           <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 text-sm font-medium text-gray-800">
// //             <div className="flex justify-between items-center">
// //               <span>SHOP</span>
// //               <span>▼</span>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <span>LOCAL ORDERS</span>
// //               <span>▼</span>
// //             </div>
// //             <span>GIFTING</span>
// //             <div className="flex justify-between items-center">
// //               <span>MY ACCOUNT & MORE</span>
// //               <span>▼</span>
// //             </div>
// //             <button className="w-fit">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-5 h-5"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         )}
// //       </nav>
// //     </header>
// //   );


// // }

// // export default Footer;