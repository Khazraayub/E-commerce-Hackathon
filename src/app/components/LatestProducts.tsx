"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";

const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
const products = [
  {
    id: 1,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latset1.png",
    isSale: false,
  },
  {
    id: 2,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latest2.png",
    isSale: true,
  },
  {
    id: 3,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latest3.png",
    isSale: false,
  },
  {
    id: 4,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latest4.png",
    isSale: false,
  },
  {
    id: 5,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latest5.png",
    isSale: false,
  },
  {
    id: 6,
    name: "Comfort Handy Craft",
    originalPrice: "$65.00",
    discountedPrice: "$42.00",
    image: "/images/latest6.png",
    isSale: false,
  },
];

export default function LatestProducts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-16 ]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold  text-[#1A0B5B] mb-8">
          Latest Products
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-8 text-sm font-medium text-[#8A8FB9] mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`font-[lato] ${
                activeTab === index
                  ? "text-[#FB2E86] border-b-2 border-[#FB2E86]"
                  : "hover:text-[#FB2E86]"
              } pb-2`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white  rounded-lg  p-4 group relative overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative bg-[#F6F7FB]   ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain "
                />
                
                
              </div>

              {/* Product Details */}
              
              <div className=" flex text-center justify-between mt-4 ">
                <h3 className="text-lg font-medium border-b text-[#1A0B5B] mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-[#1A0B5B] ">
                  {product.discountedPrice}
                  <span className="text-sm text-[#FB2E86] line-through ml-2">
                    {product.originalPrice}
                  </span>
                </p>
              </div>

             
              
                {/* Hover Overlay */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                  <div className="absolute top-4 mb-20 gap-4 left-4 flex flex-col justify-end  space-x-2 inset-0  opacity-0 group-hover:opacity-100">
                    {/* Icons (Optional) */}
                    <div className="pl-2">
                      <IoCartOutline className="text-2xl text-[#2F1AC4]" />
                    </div>
                    <div>
                      <Heart className="ml-1 w-5 h-5 text-[#2F1AC4]" />
                    </div>
                    <div className="-pt-20">
                      <FaSearchPlus className=" ml-1 w-5 h-5 text-[#2F1AC4]" />
                    </div>
                  </div>
                  {/* Sale Badge */}
                
                  <div className="absolute w-[84.87px] h-[56.73px] top-4 left-4 bg-[#F6F7FB] text-white px-3 py-1 text-xs font-bold ">
                    <img
                    src="/images/productsale.png"/>
                  </div>

                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
