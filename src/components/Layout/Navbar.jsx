
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




