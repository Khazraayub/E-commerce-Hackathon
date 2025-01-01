import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { Heart, Search } from "lucide-react";
import Banner from "../components/Banner";

export default function ShopLeftSidebar() {
  const products = [
    {
      id: 1,
      image: "/images/shop1.jpg",
      title: "Dictum morbi",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      image: "/images/shop2.jpg",
      title: "Sodales sit",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      image: "/images/shop3.jpg",
      title: "Nibh varius",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: "/images/shop4.jpg",
      title: "Mauris quis",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      image: "/images/shop5.jpg",
      title: "Morbi sagittis",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      image: "/images/shop6.jpg",
      title: "Ultricies venenatis",
      price: "$26.00",
      salePrice: "$52.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      image: "/images/shop7.jpg",
      title: "Scelerisque dignissim",
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
          Shop Left Sidebar
        </h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]"> Shop Left Sidebar</span>
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

      {/* main part */}

      <div className="w-full h-auto px-10 md:mx-auto  bg-white flex flex-col md:flex-row justify-start items-start  gap-8">
        {/* left side */}
        <div className="w-full md:w-[40%] leading-[30px] px-4 md:px-0">
          {/* 1st */}
          <h1 className="text-[#151875] text-[20px] font-bold underline ">
            Product Brand
          </h1>
          <div className="flex  items-start gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF] " />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Coaster Furniture
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Fusion Dot High Fashion
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Unique Furnitture Restor
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Dream Furnitture Flipping
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Young Repurposed
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#603EFF]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Green DIY furniture
            </p>
          </div>

          {/* 2nd */}
          <h1 className="text-[#151875] text-[20px] font-bold underline mt-5 ">
            Discount Offer
          </h1>
          <div className="flex  items-start gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2] " />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              20% Cashback
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              5% Cashback Offer
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              25% Discount Offer
            </p>
          </div>

          {/* 3rd */}
          <h1 className="text-[#151875] text-[20px] font-bold underline mt-5 ">
            Rating Item
          </h1>
          <div className="flex  items-start gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FFCC2E] " />
            <img src="/images/rating1.png" className="mt-3" />
            <p className="text-black text-[12px] py-1 ">(2341)</p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FFCC2E]" />
            <img src="/images/rating2.png" className="mt-3" />
            <p className="text-black text-[12px]  py-1 ">(1726)</p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FFCC2E]" />
            <img src="/images/rating3.png" className="mt-3" />
            <p className="text-black text-[12px]  py-1 ">(258)</p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FFCC2E]" />
            <img src="/images/rating4.png" className="mt-3" />
            <p className="text-black text-[12px]  py-1 ">(25)</p>
          </div>

          {/* 4th */}
          <h1 className="text-[#151875] text-[20px] font-bold underline mt-5 ">
            Categories
          </h1>
          <div className="flex  items-start gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2] " />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Prestashop
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Magento
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Bigcommerce
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              osCommerce
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              3dcart
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Bags
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Accessories
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Jewellery
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              Watches
            </p>
          </div>

          {/* 5th */}
          <h1 className="text-[#151875] text-[20px] font-bold underline mt-5 ">
            Price Filter
          </h1>
          <div className="flex  items-start gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2] " />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              $0.00 - $150.00
            </p>
          </div>
          <div className="flex  items-start gap-2 ">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              $150.00 - $350.00
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              $150.00 - $504.00
            </p>
          </div>
          <div className="flex  items-start gap-2 mt-21">
            <input type="checkbox" className="w-4 h-4 mt-3 accent-[#FF3EB2]" />
            <p className="text-[#7E81A2] text-[16px] font-[400] py-1 font-[lato]">
              $450.00 +
            </p>
          </div>

          {/* search */}
          <div className="flex  items-start gap-2 mt-5">
            <div className="flex w-[250px] h-[40px] items-center border-[2px] border-[#E7E6EF] rounded">
              <input
                type="text"
                placeholder="$10.00 - 20000$"
                className="flex-1 px-2 text-[12px] font-[lato] text-black placeholder-[#7E81A2] outline-none"
              />
              <button className="w-[50px] h-full bg-white flex justify-center items-center rounded-r">
                <Search className="text-[#BCBDDB] w-5 h-5 text-end" />
              </button>
            </div>
          </div>

          {/* 6th */}
          <h1 className="text-[#151875] text-[20px] font-bold underline mt-5 ">
            Filter By Color
          </h1>
          <ul className="space-y-4 mt-5 font-[lato] text-[#7E81A2]">
            <div className="flex flex-col lg:flex-row gap-5">
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#5E37FF] my-2 mx-1 "></span>
                <p>Blue</p>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#FF9437] my-2 mx-1 "></span>
                <p>Orange</p>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#FFBF95] my-2 mx-1 "></span>
                <p>Brown</p>
              </li>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#33D221] my-2 mx-1 "></span>
                <p>Green</p>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#E248FF] my-2 mx-1 "></span>
                <p>Purple</p>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-[14px] h-[14px]  rounded-full bg-[#26CBFF] my-2 mx-1 "></span>
                <p>Sky</p>
              </li>
            </div>
          </ul>
        </div>
        {/* right side */}
        
        <div className="space-y-6 py-2">
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
                  className="w-[300px] h-[197px] object-cover "
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
                <p className="text-[#9295AA] w-[90%] font-[lato] text-[17px] leading-[40px] mb-4">
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

      {/* last portion */}
      <Banner/>
     
    </div>
  );
}
