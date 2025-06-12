import React from "react";

const Footer = () => {
  return (
    <div className="font-sans mt-10 text-[#4a3c2a]">
      <div className=" mx-auto px-20 pt-8">
        <h1 className="text-2xl font-bold">A SWEET TRADITION</h1>
        <p className="text-sm mt-2 mb-6">
          Rooted in our sweet traditions, we draw inspiration from the
          classified practices of our ancestors.
        </p>
      </div>

      <div className="border-t border-[#d4c9b6]">
        <div className=" mx-auto  px-20 py-6">
          <div className="mb-8">
            <div className=" flex justify-between flex-wrap ">
              <div>
                <h3 className="font-semibold">SHOP ONLINE</h3>
                <ul className="mt-2 space-y-1 ">
                  <li>OHOCK LUNKS</li>
                  <li>POLICIES</li>
                  <li>Corporate Office</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">All Products</h3>
                <ul className="mt-2 space-y-1">
                  <li>Pinheels</li>
                </ul>
                <h3 className="font-semibold mt-4">About Us</h3>
                <h3 className="font-semibold mt-4">Privacy Policy</h3>
                <p className="text-xs mt-4">
                  S = $270, G. Ana Ruedig, Guiding, 3rd Floor,
                  <br />
                  BDOCR-6, Greenland Bank, Puripipistia
                </p>
              </div>

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

              <div className="mr-10">
                <h3 className="font-semibold">Classic Business</h3>
                <ul className="mt-2 space-y-1">
                  <li>Hyderabad</li>
                </ul>
                <h3 className="font-semibold mt-4">Store Locations</h3>
                <h3 className="font-semibold mt-4">Offing</h3>
                <h3 className="font-semibold mt-4">Payment Policy</h3>
                <h3 className="font-semibold mt-4">Refund Policy</h3>
                <p className="text-xs mt-4">
                  <q>170233 SDSS</q>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#d4c9b6] pt-4">
            <div className="flex gap-4 mb-4 md:mb-0">
              <span className="font-semibold">Shop</span>
              <span className="font-semibold">Safety Guidelines</span>
            </div>
            <div className="text-sm">
              <p>
                © {new Date().getFullYear()} Sweet Tradition. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
