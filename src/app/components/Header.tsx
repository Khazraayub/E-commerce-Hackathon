import React from "react";
import Link from "next/link";
import { ChevronDown, Heart } from "lucide-react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top banner */}
      <div className="bg-[#7E33E0] text-white py-2 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 sm:gap-8">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 text-center items-center">
            <div className="flex items-center gap-2 font-medium">
              <MdOutlineMailOutline />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <FiPhoneCall />
              <span>(12345)67890</span>
            </div>
          </div>

          {/* Language, Login, and Cart */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm sm:text-base font-normal">
            {/* Language Selector */}
            <div className="flex items-center cursor-pointer">
              <span>English</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>
            <div className="flex items-center cursor-pointer">
              <span>USD</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>

            {/* Login */}
            <div className="flex items-center cursor-pointer">
              <span><Link href={"/login"}>Login</Link></span>
              <RiAccountCircleLine className="ml-1 w-5 h-5" />
            </div>

            {/* Wishlist */}
            <div className="flex items-center cursor-pointer">
              <span>Wishlist</span>
              <Heart className="ml-1 w-5 h-5" />
            </div>

            {/* Cart */}
            <div className="cursor-pointer">
            <Link href={"/shopping-cart"}>
              <IoCartOutline className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
