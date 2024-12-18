import React from "react";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';

export default function Hero() {
  return (
    <section className="relative bg-[#F2F0FF]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-8">
            {/* Hero Image */}
            <img
              src="/images/hero1.png"
              alt="hero"
              className="hidden lg:flex w-1/4 sm:w-3/5 lg:w-[387px] lg:h-[387px] -mt-8 lg:-mt-28 lg:-ml-40"
            />
            {/* Text Content */}
            <div className="mt-8 lg:mt-0 lg:w-[644px] px-4 lg:px-0">
              <p className="text-[#FB2E86] font-medium font-[lato] text-sm mb-2">
                Best Furniture For Your Castle...
              </p>
              <h1 className="text-black  font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-4">
                New Furniture Collection 
                <br /> Trends in 2020
              </h1>
              <p className="text-[#8A8FB9] font-[lato] font-[700] text-[16px] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="px-6 py-3 bg-[#FB2E86] text-white rounded-md text-sm font-medium hover:bg-[#e02176] transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex justify-center relative">
          {/* Chair Image */}
          <img
            src="/images/hero2.png"
            alt="Furniture Chair"
            className="w-3/4 sm:w-3/5 lg:w-4/5 object-contain "
          />
          
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="w-3 h-3 bg-[#FB2E86] rounded-full"></span>
        <span className="w-3 h-3 bg-[#D3D3D3] rounded-full"></span>
        <span className="w-3 h-3 bg-[#D3D3D3] rounded-full"></span>
      </div>
    </section>
  );
}
