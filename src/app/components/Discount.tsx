"use client";
import React, { useState } from "react";


import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa6";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";


const tabs = ["Wood Chair", "Plastic Chair", "Sofa Collection"];
export default function Discount() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
    
 
      <div>
        <h1 className='text-[42px] mt-32 text-[#30207a] font-bold   flex justify-center items-center'>
          Discount Items
        </h1>

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





        <div className=' lg:p-10 p-5 md:flex lg:space-x-24 md:space-x-14  justify-center items-center lg:mx-20  '>
          <div className='space-y-4'>
            <h1 className='font-extrabold text-[#151875] text-4xl '> 20% Discount Of All Products</h1>
            <p className='text-[#FB2E86]  text-[21px]'>Eams Sofa Compact </p>
            <p className='text-[#8A8FB9] font-normal font-[lato] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <ul className='grid grid-cols-2 text-[#8A8FB9] text-sm mt-2 space-y-2 '>
              <div className='flex items-center font-[lato] '>
              <FaCheck />
                <li > Material expose like metals</li>
              </div>
              <div className='flex items-center '>
              <FaCheck />
                <li> Clear lines and geomatric figures</li>
              </div>
              <div className='flex items-center '>
              <FaCheck />
                <li> Simple neutral colours</li>
              </div>
              <div className='flex items-center '>
              <FaCheck />
                <li> Material expose like metals</li>
              </div>
            </ul>
            <div className='max-w-fit'>
              <Link href={"/AllProducts"}>
              <div>
            <button className='bg-[#FB2E86] p-2 mt-2 text-white rounded-sm  px-4 overflow-hidden'>Shop Now</button>
        </div>
              </Link>
            </div>
          </div>
          <div>
            <div className='bg-[#FCECF1] rounded-full mt-5 '>
              <Image className='py-5' src="/images/discount1.png" alt={'Hero '} width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

