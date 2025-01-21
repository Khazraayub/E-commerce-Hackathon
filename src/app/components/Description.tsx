import Link from "next/link";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import Banner from "../components/Banner";

export default function ProductDetails() {
  const products = [
    {
      id: 1,
      name: "Mens Fashion Wear",
      price: "$43.00",
      image: "/images/product5.jpg",
      rating: 4,
    },
    {
      id: 2,
      name: "Women's Fashion",
      price: "$67.00",
      image: "/images/product7.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Wolx Dummy Fashion",
      price: "$67.00",
      image: "/images/product8.jpg",
      rating: 4,
    },
    {
      id: 4,
      name: "Top Wall Digital Clock",
      price: "$51.00",
      image: "/images/product9.jpg",
      rating: 3,
    },
  ];
  return (

  <div>
   {/* 2nd portion */}
   <div className="w-full bg-[#F9F8FE] my-4 py-8">
   <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mx-auto w-[90%] md:w-full h-auto ">
     <Link
       href={"#"}
       className="text-[#151875] text-[24px]  hover:underline"
     >
       Description
     </Link>
     <Link
       href={"#"}
       className="text-[#151875] text-[24px]  hover:underline"
     >
       Additional Info
     </Link>
     <Link
       href={"#"}
       className="text-[#151875] text-[24px]  hover:underline"
     >
       Reviews
     </Link>
     <Link
       href={"#"}
       className="text-[#151875] text-[24px]  hover:underline"
     >
       Video
     </Link>
   </div>

   {/* Content Section */}
   <div className="mx-auto w-[90%] md:w-[90%] pt-5">
     {/* Heading */}
     <h1 className="text-[#151875] text-[20px] md:text-[22px] mb-4">
       Varius tempor.
     </h1>

     {/* Description */}
     <p className="text-[#A9ACC6] text-[14px] md:text-[16px] leading-relaxed">
       Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
       ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
       varius ac est bibendum. Scelerisque a, risus ac ante. Velit
       consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
       consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
       tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
       lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
       massa viverr.
     </p>

     {/* More Details List */}
     <ul className="text-[#151875] text-[18px] md:text-[22px] pt-5">
       <span className="block mb-2">More Details</span>
       <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
         <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
         Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
         arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
         nunc nec. Dui, massa viverr .
       </li>
       <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
         <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
         Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
         arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
         nunc nec. Dui, massa viverr .
       </li>
       <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
         <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
         Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
         arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
         nunc nec. Dui, massa viverr .
       </li>
       <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
         <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
         Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
         arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
         nunc nec. Dui, massa viverr .
       </li>
     </ul>
   </div>
 </div>

 {/* 3rd portion */}

 <section className="w-full py-8">
   <div className="max-w-6xl mx-auto px-4">
     {/* Section Title */}
     <h2 className="text-2xl md:text-3xl font-bold text-[#101750] mb-6">
       Related Products
     </h2>

     {/* Products Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
       {products.map((product) => (
         <div key={product.id} className="bg-white  overflow-hidden">
           {/* Product Image */}
           <div className="relative w-full h-[350px]">
             <Image
               src={product.image}
               alt={product.name}
               layout="fill"
               objectFit="cover"
             />
           </div>

           {/* Product Details */}
           <div className="pt-2 ">
             <div className="flex justify-between items-start">
               <h3 className="text-[#151875] text-[16px]  mb-2">
                 {product.name}
               </h3>
               {/* Ratings */}
               <div className="flex  gap-1 text-yellow-400">
                 {Array.from({ length: 5 }, (_, i) =>
                   i < product.rating ? (
                     <FaStar key={i} />
                   ) : (
                     <FaStarHalfAlt key={i} />
                   )
                 )}
               </div>
             </div>
             <p className="text-[#151875] text-sm font-semibold mb-2">
               {product.price}
             </p>
           </div>
         </div>
       ))}
     </div>
   </div>
 </section>




   {/* 4th portion */}

   <Banner/>


</div>
);
}
