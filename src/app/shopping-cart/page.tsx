
"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before proceeding to checkout.");
      return;
    }
    alert(`Proceeding to checkout with total: $${calculateTotal()}`);
    // You can replace this with navigation or API call for the checkout process.
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Total</h3>
            <p className="text-xl font-bold text-gray-800">${calculateTotal()}</p>
          </div>
          <Link href={"/checkout"}>
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;


