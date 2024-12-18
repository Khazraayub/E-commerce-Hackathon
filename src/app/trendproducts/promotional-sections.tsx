import Image from "next/image";
import Link from "next/link";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";

export default function PromotionalSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <div className="bg-pink-50 p-6 sm:p-8 h-auto rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151875] mb-4">
          23% off in all products
        </h2>
        <Link
          href="/shop"
          className="text-[#FB2E86] underline hover:text-[#FB2E86] font-[lato] font-semibold"
        >
          Shop Now
        </Link>
        <div className="relative h-32 sm:h-40 w-full mt-4 md:left-[100px]">
          <Image
            src="/images/trending5.png"
            alt="Promotional clock"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-6 sm:p-8 h-auto rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151875] mb-4">
          23% off in all products
        </h2>
        <Link
          href="/collection"
          className="text-[#FB2E86] font-[lato] hover:text-[#FB2E86] underline font-semibold"
        >
          View Collection
        </Link>
        <div className="relative h-28 sm:h-40 w-full mt-4 md:max-w-[250px] md:left-[100px]">
          <Image
            src="/images/trending6.png"
            alt="Promotional furniture"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
