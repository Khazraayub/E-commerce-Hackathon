import Image from "next/image"
import Link from "next/link"
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";

const sidebarProducts = [
  {
    id: 1,
    name: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending7.png"
  },
  {
    id: 2,
    name: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending8.png"
  },
  {
    id: 3,
    name: "Executive Seat chair",
    price: 32.00,
    image: "/images/trending9.png"
  },
]

export default function SidebarProducts() {
  return (
    <div className="space-y-4 ">
      {sidebarProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="flex items-center gap-4 group"
        >
          <div className="relative w-20 h-20 bg-gray-50 rounded">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <h3 className="text-[#151875] font-semibold group-hover:text-[#FB2E86]">
              {product.name}
            </h3>
            <p className="text-[#151875]">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

