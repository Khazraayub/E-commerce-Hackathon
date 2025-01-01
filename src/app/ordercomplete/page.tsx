import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Banner from "../components/Banner";
import Link from "next/link";


export default function OrderComplete() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold text-[#101750] ">Order Completed</h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]">Order Completed</span>
        </p>
      </div>

  
      <div className="max-w-full  mx-auto py-16">
       
      <div className="relative md:w-[625px]  w-full mx-auto flex flex-col gap-8 justify-center text-center  items-center ">
          <img
          className="w-[65px] hidden md:block absolute -left-12 top-4"
          src="/images/complete1.png"
          alt="time"
          
        />
        <img
          className="w-[65px] rounded-[50%] p-2 border-8 border-gray-100"
          src="/images/complete2.png"
          alt="tick"
        />
        <h1 className="text-[#101750] font-bold text-4xl">Your Order Is Completed! </h1>
        <p className="font-[lato] leading-[30px] text-[#8D92A7] md:w-[600px] ">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <button className="bg-[#FF1788] text-white py-4 px-6 hover:bg-pink-700 rounded" >
          <Link href={"/"}>Continue Shopping</Link>
        </button>
      </div>
    </div>
    <Banner/>
      </div>

      

  


  );
}
