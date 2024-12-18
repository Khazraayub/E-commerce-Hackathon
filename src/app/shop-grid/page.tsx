import Link from "next/link";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Image from "next/image";
import { Heart } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import Banner from "../components/Banner";

export default function ShopGrid() {
  const products = [
    {
      id: 1,
      image: "/images/grid1.png",
      name: "Vel elit euismod",
      price: "$26.00 ",
      salePrice: "$42.00",
    },
    {
      id: 2,
      image: "/images/grid2.png",
      name: "Ultricies condimentum imperdiet",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 3,
      image: "/images/grid3.png",
      name: "Vitae suspendisse sed",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 4,
      image: "/images/grid4.png",
      name: "Sed at fermentum",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 5,
      image: "/images/grid5.png",
      name: "Fusce pellentesque at",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 6,
      image: "/images/grid6.png",
      name: "Vestibulum magna laoreet",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 7,
      image: "/images/grid7.png",
      name: "Sollicitudin amet orci",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 8,
      image: "/images/grid8.png",
      name: "Ultrices mauris sit",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 9,
      image: "/images/grid9.png",
      name: "Pellentesque condimentum ac ",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 10,
      image: "/images/grid10.png",
      name: "Cras scelerisque velit  ",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 11,
      image: "/images/grid11.png",
      name: "Lectus vulputate faucibus  ",
      price: "$26.00",
      salePrice: "$42.00",
    },
    {
      id: 12,
      image: "/images/grid12.png",
      name: "Purus risus, ut",
      price: "$26.00",
      salePrice: "$42.00",
    },
  ];

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8 ">
        <h1 className="text-3xl font-bold text-[#101750] ">
          Shop Grid Default
        </h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]"> Shop Grid Default</span>
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

      {/* main portion */}

      <div className="px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white  p-4 group relative overflow-hidden  "
          >
            {/* Product Image Container */}
            <div className="bg-[#F6F7FB] w-full h-[280px] mx-auto flex justify-center items-center relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[150px] md:w-full object-contain"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-[#151875] text-[16px] font-medium mb-2">
              {product.name}
            </h2>

            {/* Color Options */}
            <div className="flex justify-center space-x-2 mb-2">
              <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
              <span className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></span>
              <span className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></span>
            </div>

            {/* Price Section */}
            <p className="text-[14px]">
              <span className="text-[#151875] mr-2">{product.price}</span>
              <span className="text-[#FB2E86] line-through">{product.salePrice}</span>
            </p>

            {/* Hover Overlay */}
            <div className="absolute inset-0   opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                  <div className="absolute top-4 mb-24 gap-4 left-4 flex flex-col justify-end  space-x-2 inset-0  opacity-0 group-hover:opacity-100">
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
            </div>
          </div>
        ))}
      </div>
    </div>

        <Banner/>

    </div>
  );
}
