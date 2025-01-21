import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Image from "next/image";
import Link from "next/link";
export default function CheckOut() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="w-full text-center  pt-5 pl-4 md:pl-10 h-[200px] bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold text-[#101750] text-center md:text-left">
          CheckOut
        </h1>
      </div>

      {/* Main Container */}
      <div className="w-full text-center md:text-left mb-4 px-4 py-4 flex justify-center items-center">
        <h1 className="text-[#1D3178] text-[24px] leading-[28.13px] font-bold">
          CheckOut
          <p className="text-[12px] text-[#1D3178] font-[lato]">
            Cart / &nbsp; Information / &nbsp; Shipping / &nbsp; Payment
          </p>
        </h1>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-center  px-4 py-4">
        {/* Left Side */}
        <div className="w-full   md:max-w-full lg:max-w-[60%]  bg-[#F8F8FD] px-4 py-8 rounded-md shadow-md">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-[18px] text-[#1D3178] font-bold mb-2 md:mb-0">
              Contact Information
            </h1>
            <p className="text-[#C1C8E1] text-[14px] font-[lato] font-medium">
              Already have an account?{" "}
              <span className=" cursor-pointer">Log in</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <input
              id="email"
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
            />
            <div className="flex  items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 accent-[#4a8f6a]" />
              <p className="text-[#8A91AB] text-[12px] py-1 font-[lato]">
                Keep me up to date on news and exclusive offers
              </p>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mt-8">
            <h2 className="text-[#1D3178] text-[18px] font-bold mb-6">
              Shipping address
            </h2>
            <form className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
              </div>

              {/* Address */}
              <input
                id="address"
                type="text"
                placeholder="Address"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* Apartment */}
              <input
                id="apartment"
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* City */}
              <input
                id="city"
                type="text"
                placeholder="City"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* Country and Postal Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="country"
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
                <input
                  id="postalCode"
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center md:text-left flex justify-center items-center">
                <Link href={"/ordercomplete"}>
                <button
                  type="submit"
                  className="bg-[#FB2E86] hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition"
                >
                  Confirm Order
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
)
}
