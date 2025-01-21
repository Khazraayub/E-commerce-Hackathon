"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext"
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Description from "@/app/components/Description";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { addToCart } = useCart(); // Get addToCart from context

  // Sanity query to fetch product details
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

  // Fetch product data on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await client.fetch(query);
        const product = products.find((item: any) => item._id === params.id);
        if (product) {
          setData(product);
          setSelectedImage(product.image); // Set the initial selected image
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  // Handle image thumbnail click
  const handleImageClick = (image: string): void => {
    setSelectedImage(image);
  };

  // Render loading state while fetching data
  if (!data) {
    return <div>Loading...</div>;
  }
  // Add product to cart
  const handleAddToCart = () => {
    addToCart({ ...data, quantity: 1 }); // Add to cart with default quantity 1
  };

  return (
    <main className="">
        
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8 ">
        <h1 className="text-3xl font-bold text-[#101750] ">Product Details</h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]"> Product Details </span>
        </p>
      </div>
        
      <section className="my-20">
        <div className="max-w-[84%] mx-auto">
          <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
            {/* Product images section */}
            <div className="flex flex-row gap-4 md:gap-9 items-center md:w-[50%]">
              <div>
                <Image
                  className="p-3 shadow-lg cursor-pointer"
                  src={data.image}
                  width={100}
                  height={100}
                  alt={data.name}
                  onClick={() => handleImageClick(data.image)}
                />
                <Image
                  className="p-3 shadow-lg cursor-pointer"
                  src={data.image}
                  width={100}
                  height={100}
                  alt={data.name}
                  onClick={() => handleImageClick(data.image)}
                />
                <Image
                  className="p-3 shadow-lg cursor-pointer"
                  src={data.image}
                  width={100}
                  height={100}
                  alt={data.name}
                  onClick={() => handleImageClick(data.image)}
                />
              </div>

              {/* Main selected image */}
              <div className="items-center shadow-xl">
                <Image
                  src={selectedImage}
                  width={300}
                  height={300}
                  alt={data.name}
                  className="w-[300px] p-3 object-cover"
                />
              </div>
            </div>

            {/* Product details section */}
            <div className="md:w-[45%] flex items-start gap-4 flex-col">
              <h3 className="text-3xl font-bold">{data.name}</h3>
              {/* Ratings */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="text-yellow-400">★★★★★</div>
            <p className="text-[#151875]">(22)</p>
          </div>
              <div className="inline-flex gap-x-5">
                <span className="text-sm text-[#151875] font-bold">
                  ${data.price}
                </span>
                <span className="text-sm text-[#f333b9] font-bold">
                  ${data.discountPercentage} %OFF
                </span>
                
              </div>
              <span className="text-sm">Stock Level: {data.stockLevel}</span>
              <p className="text-sm text-[#A9ACC6] leading-[20px]">
                {data.description || "No description available."}
              </p>
              <button onClick={handleAddToCart} className="px-4 py-1 text-sm hover:bg-opacity-70 cursor-pointer bg-[#FB2E86] rounded-[6px] text-[#ffffff] font-bold">
             Add To Cart
              </button>
              <div>
                <span className="text-sm text-[#151875] font-bold">
                  Categories: {data.category}
                </span>
              </div>
              <div>
                <span className="text-sm text-[#151875] font-bold">Tags:</span>
                
              </div>
              <div>
                <span className="text-sm text-[#151875] font-bold">Share:</span>
                <div className="flex gap-2">
              <Link href="#">
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#0B0E3A] transition">
                  <FaFacebookF className="text-white text-sm" />
                </div>
              </Link>
              <Link href="#">
                <div className="w-8 h-8 bg-[#FB2E86] rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                  <FaInstagram className="text-white text-sm" />
                </div>
              </Link>
              <Link href="#">
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#0B0E3A] transition">
                  <FaTwitter className="text-white text-sm" />
                </div>
              </Link>
            </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <Description/>
    
    </main>
  );
}

export default Page;
