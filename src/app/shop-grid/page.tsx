
"use client";
import { useWishlist } from "../context/WishlistContext";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Ensure this path is correct
import Link from "next/link";

export default function Shop() {
  const { addToWishlist } = useWishlist();
  const [wishlist, setWishlist] = useState<any[]>([]); // State to store wishlist items
  const [products, setProducts] = useState<any[]>([]); // State to store products
  const [message, setMessage] = useState<string | null>(null); // State for notification message

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        "image": image.asset->url,
        price,
        description,
        discountPercentage,
        stockLevel,
        isFeaturedProduct,
        category
      }`;

      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Header */}
        <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8 ">
        <h1 className="text-3xl font-bold text-[#101750] ">
          Products
        </h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]"> Products</span>
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
      {/* Products Section */}
      <div className="px-4 py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product._id}
              className="bg-white p-4 group shadow-md rounded-lg relative overflow-hidden cursor-pointer transition-all transform duration-300 hover:scale-110"
            >
              {/* Image */}
              <div className="bg-[#F6F7FB] w-full h-[280px] flex justify-center items-center shadow-md rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[200px] h-[150px] object-contain transition-all transform duration-300 hover:scale-110"
                />
              </div>

              {/* Details */}
              <h2 className="text-[#151875] text-[16px] font-medium mt-2">
                {product.name}
              </h2>
              <h2 className="text-[#151875] text-[16px] font-medium mt-2">
                {product.description}
              </h2>
              <p className="text-sm text-[#8A8FB9]">{product.category}</p>
              
              <p className="text-[14px] mt-2  ">
                
                <span className="text-[#151875] mr-2">${product.price}</span>
                
                {product.discountPercentage > 0 && (
                  <span className="text-[#FB2E86] line-through">
                    {product.discountPercentage}%
                  </span>
                )}
               
              </p>
            
              

              {/* Add to Wishlist */}
              <div className=" space-x-4">
              <button
                onClick={() => addToWishlist(product)}
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
              >
                Add to Wishlist
              </button>
              <Link
                href={`/productdet/${product._id}`} // Product page link
                key={product._id}
                passHref
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Detail
              </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

