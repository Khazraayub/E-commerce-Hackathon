import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full">
      <section className=" w-full  bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Image
              src="/images/newslater.png"
              alt="Fashion Live Logo"
              width={904}
              height={93}
              className=" object-contain"
            />
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
