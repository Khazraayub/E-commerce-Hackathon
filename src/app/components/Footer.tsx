import React from "react";

import "@fontsource/josefin-sans";
import "@fontsource/lato";

export default function Footer() {
  return (
    <footer className="text-[#8A8FB9] bg-[#EEEFFB] body-font font-[lato]">
      {/* Footer Top Section */}
      <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col lg:flex-row">
        {/* Logo and Newsletter Section */}
        <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3 mb-8 lg:mb-0">
          <span className="text-[38px] font-bold text-black font-[josefin-sans]">
            Hekto
          </span>
          <div className="mt-4 flex items-center justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full max-w-[300px] p-2 text-black rounded-l-sm border border-[#E7E6EF] text-sm outline-none"
            />
            <button className="w-[100px] h-[44px] bg-[#FB2E86] text-white rounded-r-sm hover:bg-[#e02074]">
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-sm">Contact Info</p>
          <p className="mt-2 text-sm">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-16 w-full lg:w-2/3">
          {/* Categories Section */}
          <div>
            <h3 className="text-[22px] font-semibold text-black font-[josefin-sans]">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-[22px] font-semibold text-black font-[josefin-sans]">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-[22px] font-semibold text-black font-[josefin-sans]">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#E7E4F8] py-4">
        <div className="container mx-auto px-5 flex flex-wrap justify-evenly items-center">
          <p className="text-gray-500 text-sm text-center lg:text-left w-full lg:w-auto mb-4 lg:mb-0">
            ©Webecy - All Rights Reserved - Design By Khazra Shaikh
          </p>
          <div className="flex justify-center items-center gap-4">
            <a className="text-white rounded-full bg-[#242e8b] p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-white rounded-full bg-[#242e8b] p-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-white rounded-full bg-[#242e8b] p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
