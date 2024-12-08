'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import "@fontsource/josefin-sans";
import "@fontsource/lato";

interface Product {
  id: number
  name: string
  price: number
  image: string
  isNew?: boolean
  isActive?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Mini LCW Chair",
    price: 56.00,
    image: "/images/top1.png",
    isNew: true,
    isActive: true
  },
  {
    id: 2,
    name: "Mini LCW Chair",
    price: 56.00,
    image: "/images/top2.png",
  },
  {
    id: 3,
    name: "Mini LCW Chair",
    price: 56.00,
    image: "/images/top3.png"
  },
  {
    id: 4,
    name: "Mini LCW Chair",
    price: 56.00,
    image: "/images/top4.png",
  }
]

export default function TopCategories() {
  return (
    <section className="py-12 font-[josefin-sans]">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-8">
          Top Categories
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/4">
                <div className="relative p-4 ">
                
                  <div className="relative ">
                    <div className="relative aspect-square bg-gray-50 rounded-full mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 shadow-2xl rounded-full hover:border-purple-600 hover:border-l-[8px] hover:border-[2px] "
                      />
                      {product.isNew && (
                        <Badge className="absolute bottom-4 left-14 bg-[#08D15F] hover:bg-green-600">
                          View Shop
                        </Badge>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-[#151875] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#151875]">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "w-2 h-2 rounded-full",
                index === 0 ? "bg-[#FB2E86]" : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

