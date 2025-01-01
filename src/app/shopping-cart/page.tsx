"use client";
import Image from "next/image";
import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    image: "/images/cart1.jpg",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    image: "/images/cart2.jpg",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    image: "/images/cart3.jpg",
  },
  {
    id: 4,
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    image: "/images/cart4.jpg",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    image: "/images/cart5.jpg",
  },
];

export default function ShoppingCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] px-4 md:pl-10 bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold text-[#101750] ">Shopping cart</h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]">Shopping cart</span>
        </p>
      </div>

      <div className="container flex flex-col md:flex-row mx-auto px-4 py-8 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <table className="w-full border-collapse border-b border-gray-200 text-left">
            <thead className="text-[20px]">
              <tr>
                <th className="p-4 border-b border-gray-200 font-bold text-[#1D3178]">
                  Product
                </th>
                <th className="p-4 border-b border-gray-200 font-bold text-[#1D3178]">
                  Price
                </th>
                <th className="p-4 border-b border-gray-200 font-bold text-[#1D3178]">
                  Quantity
                </th>
                <th className="p-4 border-b border-gray-200 font-bold text-[#1D3178]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 border-b border-gray-200 flex md:flex-row flex-col items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="object-cover w-[83px] h-[87px] rounded-sm "
                    />
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-[#A1A8C1] text-sm">Color: {item.color}</p>
                      <p className="text-[#A1A8C1] text-sm">Size: {item.size}</p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200 text-[#15245E]">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-12 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="p-4 border-b border-gray-200 text-[#15245E]">
                    ${item.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-6">
            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded hover:bg-[#e02b7e]">
              Update Cart
            </button>
            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded hover:bg-[#e02b7e]">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full md:w-1/3 space-y-8 py-4">
          {/* Cart Totals */}
          
            <h3 className="text-xl font-bold text-center text-[#1D3178] mb-4">Cart Totals</h3>
            <div className="bg-[#F4F4FC] p-6 rounded h-[284px] w-[371px] ml-5 font-[lato]  shadow-md">
            <div className="flex justify-between border-b py-4 mb-2">
              <p className="text-[#1D3178]">Subtotals:</p>
              <p className="font-medium text-[#15245E]">£219.00</p>
            </div>
            <div className="flex justify-between border-b py-4 mb-4">
              <p className="text-[#1D3178]">Totals:</p>
              <p className="font-medium text-[#15245E]">£325.00</p>
            </div>
            <p className="text-sm text-[#8A91AB] mb-4">
              <span className="text-[#19D16F]">●</span> Shipping & taxes calculated
              at checkout
            </p>
            <Link href="/demo">
            <button className="bg-[#19D16F] text-white py-2 px-6 rounded hover:bg-green-600 w-full">
              Proceed To Checkout
            </button>
            </Link>
          </div>

          {/* Calculate Shipping */}
          <div className=" p-6 pt-5 ">
          
            <h3 className="text-xl font-bold text-center text-[#1D3178] mb-4">
              Calculate Shopping
            </h3>
            
            <div className="bg-[#F4F4FC] h-[284px] w-[371px] p-6 rounded shadow-md">
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full mb-4 border-b bg-[#F4F4FC] text-[#C5CBE3] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#151875]"
            />
            <input
              type="text"
              placeholder="Mirpur Dhaka - 1200"
              className="w-full mb-4 border-b bg-[#F4F4FC] text-[#C5CBE3]  py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#151875]"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-4 border-b bg-[#F4F4FC] text-[#C5CBE3]   py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#151875]"
            />
            <div className="w-[70%] h-[41px]">
            
            <button className="bg-[#FB2E86]  text-white py-2 px-6 rounded hover:bg-[#e02b7e] ">
            
              Calculate Shipping
              
            </button>
            
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}