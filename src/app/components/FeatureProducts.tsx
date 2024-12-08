import React from "react";
import {  Heart } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import "@fontsource/josefin-sans";
import "@fontsource/lato";

const products = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/feature1.png", 
  },
  {
    id: 2,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$62.00",
    image: "/images/feature2.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/feature3.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/feature4.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-[josefin-sans] text-[#1A0B5B] mb-12">
          Featured Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-[#F6F7FB] rounded-lg shadow-lg p-4 relative group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                

              {/* Product Details */}
              <div className=" bg-white hover:bg-[#2F1AC4] hover:text-white text-center mt-4 ">
                <h3 className="text-lg font-semibold font-[lato]  text-[#FB2E86] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-[#151875] font-[josefin-sans] mb-1">Code - {product.code}</p>
                <div className="flex justify-center  space-x-2">
                <span className="w-4 h-1 bg-[#05E6B7] rounded-md "></span>
                <span className="w-4 h-1 bg-[#FB2E86] rounded-md "></span>
                <span className="w-4 h-1 bg-[#00009D] rounded-md "></span>
                </div>
                <p className="text-lg font-bold font-[lato] text-[#151875]">{product.price}</p>
                {/* Hover Overlay */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                  <button className="bg-[#08D15F] text-white font-medium text-sm px-4 py-2 rounded-lg mb-2">
                    View Details
                  </button>
                  <div className="absolute top-4 left-4 flex space-x-2 inset-0  opacity-0 group-hover:opacity-100">
                  {/* Icons (Optional) */}
                  <div >
                  <IoCartOutline className="text-2xl text-[#2F1AC4]" />
                     
                   
                  </div>
                  <div >
                  
                  <Heart className="ml-1 w-5 h-5 text-[#1389FF]" />
                  </div>
                  <div className="-pt-20">
                    <FaSearchPlus className=" ml-1 w-5 h-5 text-[#1389FF]"/>
                  </div>
                </div>
                </div>
              </div>
              </div>

             
              
            </div>
          ))}
        </div>

        {/* Pagination (Optional) */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-6 h-2 bg-[#FB2E86] rounded-md "></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md "></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md "></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md"></span>
        </div>
      </div>
    </section>
  );
}
