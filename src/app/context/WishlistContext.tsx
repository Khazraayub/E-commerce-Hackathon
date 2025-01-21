"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Create a context for wishlist
const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null); // State for notification message

  
// Add product to the wishlist
const addToWishlist = (product: any) => {
    if (wishlist.find((item) => item._id === product._id)) {
      setMessage("Product is already in the wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      setMessage(`${product.name} has been added to your wishlist.`);
    }

    // Clear the message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };
  // Remove product from wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter((item) => item._id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
      {/* Notification Message */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#FB2E86] text-white px-4 py-2 rounded-md shadow-md z-50">
          {message}
        </div>
      )}
    </WishlistContext.Provider>
    
  );
};

export const useWishlist = () => useContext(WishlistContext);
