import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fefaf6] w-full h-25 shadow-sm sticky top-0 z-50">
      <nav className="mx-auto px-4  lg:px-8">
        <div className="flex justify-between  items-center h-25">
          {/* Left Links */}
          <div className="hidden md:flex space-x-6 text-[17px] font-medium text-gray-800">
            {/* <div className="flex items-center cursor-pointer">
              SHOP <span className="ml-1">▼</span>
            </div> */}
            <Link
              to="/shop"
              className="flex hover:underline items-center cursor-pointer text-gray-800 hover:text-gray-600"
              onClick={() => setMenuOpen(false)} // to close mobile menu if open
            >
              SHOP 
            </Link>

            <Link to="/bulkbuy" className="flex items-center hover:underline cursor-pointer" >
            Bulk Buying
            </Link>

            <Link to="/gifting" className="flex items-center hover:underline cursor-pointer" >
             Gifting
            </Link>

            {/* <div className="flex items-center hover:underline cursor-pointer">
              Bulk Buying 
            </div> */}
            {/* <span className="cursor-pointer hover:underline">GIFTING</span> */}
          </div>

          {/* Center Logo Image */}
           <Link to="/" className="flex justify-center items-center" >
 <img
              src="/images/mainLogo.png" // 
              alt="chautari sweets Logo"
              className="w-25  object-contain"
            />            </Link>

          

          {/* Right Links */}
          <div className="hidden md:flex space-x-6 text-[17px] font-medium text-gray-800 items-center">
            <div className="flex items-center cursor-pointer">
              MY ACCOUNT & MORE <span className="ml-1 hover:underline"></span>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
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
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex bg-white flex-col space-y-4  pb-4 text-sm font-medium text-gray-800">
            <div className="flex justify-between items-center">
              <span>SHOP</span>
            </div>
            <div className="flex justify-between items-center">
              <span>LOCAL ORDERS</span>
            </div>
            <span>GIFTING</span>
            <div className="flex justify-between items-center">
              <span>MY ACCOUNT & MORE</span>
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
