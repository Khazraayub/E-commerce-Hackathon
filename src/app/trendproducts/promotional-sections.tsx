import Image from "next/image"
import Link from "next/link"
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";

export default function PromotionalSections() {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-12">
      <div className="bg-pink-50 p-8 h-[270px] rounded-lg">
        <h2 className="text-2xl font-bold  text-[#151875] mb-4">
          23% off in all products
        </h2>
        <Link 
          href="/shop"
          className="text-[#FB2E86] underline hover:text-[#FB2E86] font-[lato] font-semibold"
        >
          Shop Now
        </Link>
        <div className="relative h-40 mt-4 left-[100px]">
          <Image
            src="/images/trending5.png"
            alt="Promotional clock"
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 h-[270px] rounded-lg">
        <h2 className="text-2xl font-bold  text-[#151875] mb-4">
          23% off in all products
        </h2>
        <Link 
          href="/collection"
          className="text-[#FB2E86] font-[lato] hover:text-[#FB2E86] underline font-semibold"
        >
          View Collection
        </Link>
        <div className="relative h-[170px] w-[312px] mt-4 left-[100px] ">
          <Image
            src="/images/trending6.png"
            alt="Promotional furniture"
            fill
            className="object-contain h-[170px] w-[312px] "
          />
        </div>
      </div>
    </div>
  )
}

