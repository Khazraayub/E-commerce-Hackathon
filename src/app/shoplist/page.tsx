import Link from "next/link";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { Heart } from "lucide-react";
import Banner from "../components/Banner";

export default function ShopList() {
  const products = [
    {
      id: 1,
      image: "/images/list1.jpg",
      title: "Accumsan tincidunt",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      image: "/images/list2.jpg",
      title: "In nulla",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      image: "/images/list3.jpg",
      title: "Vel sem",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/images/list4.jpg",
      title: "Porttitor cum",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      image: "/images/list5.jpg",
      title: "Nunc in",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      image: "/images/list6.jpg",
      title: "Vitae facilisis",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      image: "/images/list7.jpg",
      title: "Curabitur lectus",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8 ">
        <h1 className="text-3xl font-bold text-[#101750] ">
          Shop List
        </h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]"> Shop List</span>
        </p>
      </div>

      {/* nav */}

      <div className="w-full px-4 py-4">
        {/* Main Container */}
        <div className="w-full flex flex-wrap md:flex-nowrap justify-evenly items-center">
          {/* Left Section */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h1 className="text-[#151875] text-[20px] md:text-[22px] font-bold text-center md:text-left">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-[#8A8FB9] text-[12px] font-[lato] text-center md:text-left">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end items-center space-x-3 md:space-x-5">
            {/* Per Page Input */}
            <label className="text-[#3F509E] text-[14px] md:text-[16px]">
              Per Page:
              <input
                type="number"
                defaultValue={1}
                className="w-12 border border-gray-300 rounded text-center ml-2"
              />
            </label>

            {/* Sort By Input */}
            <label className="text-[#3F509E] text-[14px] md:text-[16px]">
              Sort By:
              <input
                type="text"
                placeholder="Best Match"
                className="w-[96px] h-[28px] text-[#8A8FB9] font-[lato] border border-gray-300 rounded text-center ml-2"
              />
            </label>

            {/* View Input */}
            <label className="text-[#3F509E] text-[14px] md:text-[16px]">
              View:
              <input
                type="text"
                className="w-[162px] h-[30px] text-[#8A8FB9] font-[lato] border border-gray-300 rounded text-center ml-2"
              />
            </label>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="px-4 py-8">
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 md:p-6"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[314px] h-[218px] object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="w-full flex-1 md:ml-6 mt-4 md:mt-0">
                <div className="w-[50%] flex justify-between items-center space-x-2 mb-2">
                  <h2 className="text-[#111C85] text-[20px] font-bold mb-2">
                    {product.title}
                  </h2>

                  {/* Color Options */}
                  <div className="flex  space-x-2">
                    <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                    <span className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></span>
                    <span className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[#111C85] text-[18px] font-medium">
                    {product.price}
                  </span>
                  <span className="text-[#FF2AAA] line-through text-[16px]">
                    {product.salePrice}
                  </span>
                  <span className="flex space-x-1">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <span key={index} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </span>
                </div>
                <p className="text-[#9295AA] w-[70%] font-[lato] text-[17px] leading-[40px] mb-4">
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="p-2 bg-white shadow rounded-full hover:bg-gray-200 transition">
                    <IoCartOutline className="text-[#2F1AC4] text-xl" />
                  </button>
                  <button className="p-2 bg-white shadow  rounded-full hover:bg-gray-200 transition">
                    <Heart className="text-[#2F1AC4] text-xl" />
                  </button>
                  <button className="p-2 bg-white shadow  rounded-full hover:bg-gray-200 transition">
                    <FaSearchPlus className="text-[#2F1AC4] text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner />
    </div>
  );
}
