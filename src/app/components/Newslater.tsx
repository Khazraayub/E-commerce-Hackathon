
import Image from "next/image"
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import Link from "next/link";

export default function Newslater() {
  return (
    <div className="w-full">
      <section className="relative bg-gray-50 py-24">
        <div className="absolute right-0 top-0 h-full w-full">
          <img
            src="/images/newslater1.JPG"
            alt="Decorative plant"
           
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">
              Get Latest Update By Subscribe Our Newsletter
            </h2>
            <Link href={"/login"}>
            <button
            
              className="bg-[#FB2E86] px-4 py-2 text-white hover:bg-[#FB2E86]-600"
            >
              Subscribe Now
            </button>
            </Link>
          </div>
        </div>
      </section>
      
       
    </div>
  )
}

