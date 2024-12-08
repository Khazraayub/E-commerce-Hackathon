import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import "@fontsource/josefin-sans";
import "@fontsource/lato";


const LatestBlog = () => {
  return (
    <div className="bg-white font-[josefin-sans]">
      <h1 className="text-3xl text-center font-semibold py-10">Latest Blog</h1>
      <div className="flex flex-col items-center lg:flex-row justify-evenly">
        <div className="group">
          <div className="space-y-4">
            <Image
              src={"/images/blog1.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
              <FaPenNib className="pt-1 text-[#FB2E86]" />
              <p>Saber Ali</p>
                
              </div>
              <div className="flex gap-2">
                <SlCalender className="pt-1 text-[#fb8a2e]" />
                <p>21-Aug-2012</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] font-[lato]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
        <div className="group">
          <div className="space-y-4">
            <Image
              src={"/images/blog2.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
              <FaPenNib className="pt-1 text-[#FB2E86]" />
                <p>Saber Ali</p>
              </div>
              <div className="flex gap-2">
              <SlCalender className="pt-1 text-[#fb8a2e]" />
                <p>21-Aug-2012</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] font-[lato]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
        <div className="group">
          <div className="space-y-4">
            <Image
              src={"/images/blog3.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
              <FaPenNib className="pt-1 text-[#FB2E86]" />
              <p>Saber Ali</p>
              </div>
              <div className="flex gap-2">
              <SlCalender className="pt-1 text-[#fb8a2e]" />
                <p>21-Aug-2012</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] font-[lato]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;