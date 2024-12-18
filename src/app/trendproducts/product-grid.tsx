import Image from "next/image"
import Link from "next/link"
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";


interface Product {
  id: number
  name: string
  currentPrice: number
  originalPrice: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Cantilever chair",
    currentPrice: 26.00,
    originalPrice: 49.00,
    image: "/images/trending1.png"
  },
  {
    id: 2,
    name: "Cantilever chair",
    currentPrice: 26.00,
    originalPrice: 49.00,
    image: "/images/trending2.png"
  },
  {
    id: 3,
    name: "Cantilever chair",
    currentPrice: 26.00,
    originalPrice: 49.00,
    image: "/images/trending3.png"
  },
  {
    id: 4,
    name: "Cantilever chair",
    currentPrice: 26.00,
    originalPrice: 49.00,
    image: "/images/trending4.png"
  },
]

export default function ProductGrid() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group"
        >
          <div className=" bg-white shadow-lg rounded-lg p-6 transition-all duration-200 hover:shadow-md">
            <div className="relative bg-gray-50 aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-[lato] text-[#151875] font-semibold mb-2">
              {product.name}
            </h3>
            <div className="flex justify-center gap-3">
              <span className="text-[#151875] font-semibold ">
                ${product.currentPrice.toFixed(2)}
              </span>
              <span className="text-gray-400  line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

