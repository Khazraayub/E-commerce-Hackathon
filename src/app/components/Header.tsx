"use client"
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart } from "lucide-react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoCartOutline, IoHeart } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
export default function Header() {
   const [wishlist, setWishlist] = useState<any[]>([]); // State to store wishlist items
   const [products, setProducts] = useState<any[]>([]); // State to store products
   const [message, setMessage] = useState<string | null>(null); // State for notification message
   const { notification } = useCart();

   const { cart } = useCart();
  

   
   // Add product to the wishlist
  const handleAddToWishlist = (product: any) => {
    if (wishlist.find((item) => item._id === product._id)) {
      setMessage("Product is already in the wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      setMessage(`${product.name} has been added to your wishlist.`);
    }

    // Clear the message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };
 

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

            {/* Wishlist
            <div className="flex items-center cursor-pointer">
            <Link href={"/wishlist"}><span>WishList</span>
              <Heart className="ml-1 w-5 h-5" /></Link>
            </div> */}

            {/* Navbar */}
      
        
           
        
            <Link href="/wishlist" className="relative">
        <span><Heart size={28} className="cursor-pointer" /></span>
        {wishlist.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {wishlist.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </Link>
        {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#FB2E86] text-white px-4 py-2 rounded-md shadow-md z-50">
          {message}
        </div>
      )}

       
      

            {/* Cart */}
            <Link href="/shopping-cart" className="relative">
        <span><IoCartOutline size={28} className="cursor-pointer" /></span>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </Link>
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md z-50">
          {notification}
        </div>
      )}


            {/* <div className="cursor-pointer">
            <Link href={"/shopping-cart"}>
            Cart: {cart.length} item(s)
              <IoCartOutline className="text-2xl" />
              </Link> */}


            
          </div>
        </div>
      </div>
    </header>
  );
}
