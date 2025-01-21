
"use client";

import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product: any) => (
            <div key={product._id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[150px] object-contain mb-4"
              />
              <h2 className="text-lg font-bold text-blue-950">{product.name}</h2>
              <p className="text-pink-500">${product.price}</p>
              <p className="text-pink-500">${product.discountPercentage} %OFF</p>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
