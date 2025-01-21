"use client";

import React, { createContext, useContext, useState } from "react";

// Define the structure of a cart item
interface CartItem {
  image: string | undefined;
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  notification: string | null;
}

// Create the context with a default value of `null`
const CartContext = createContext<CartContextType | null>(null);

// Create the provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        // If the item already exists, update its quantity
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Otherwise, add the new item
      return [...prevCart, item];
    });

    // Set a success notification
    setNotification(`${item.name} has been added to your cart.`);

    // Clear the notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  // Remove an item from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
