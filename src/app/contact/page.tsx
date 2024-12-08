import Link from "next/link";
import "@fontsource/josefin-sans";
import "@fontsource/lato";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold font-[josefin-sans]">Contact Us</h1>
        <p className="text-sm text-black font-lato">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]">Contact Us</span>
        </p>
      </div>

      <div className="min-h-screen bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Information About Us Section */}
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#151875] font-[josefin-sans] mb-4">
              Information About us
            </h2>
            <p className="text-[#8A8FB9] font-[lato]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              accumsan erat ut velit consequat, non feugiat magna luctus.
              Accumsan lacus vel facilisis volutpat est velit egestas.
            </p>
            {/* Colored Dots */}
            <div className="flex space-x-4 mt-4">
              <span className="w-6 h-6 rounded-full bg-[#5625DF]"></span>
              <span className="w-6 h-6 rounded-full bg-[#FF27B7]"></span>
              <span className="w-6 h-6 rounded-full bg-[#37DAF3]"></span>
            </div>
          </div>

          {/* Contact Way Section */}
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#151875] font-[josefin-sans] mb-4">
              Contact Way
            </h2>
            <ul className="space-y-6 font-[lato] text-[#8A8FB9]">
              <div className="flex flex-col lg:flex-row gap-5">
                <li className="flex items-start">
                  <span className="w-[45px] h-[45px] rounded-full bg-[#5726DF] inline-block mr-4"></span>
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-[45px] h-[45px] rounded-full bg-[#FB2E86] inline-block mr-4"></span>
                  <div>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </li>
              </div>
              <div className="flex flex-col lg:flex-row gap-5">
                <li className="flex items-start">
                  <span className="w-[45px] h-[45px] rounded-full bg-[#FFB265] inline-block mr-4"></span>
                  <div>
                    <p>20 Margaret st, London</p>
                    <p>Great Britain, 3NM98-LK</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-[45px] h-[45px] rounded-full bg-[#1BE982] inline-block mr-4"></span>
                  <div>
                    <p>Free standard shipping</p>
                    <p>on all orders</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col lg:flex-row mt-10 gap-10 items-center">
          <div className="bg-white p-8 w-full lg:w-[534px]">
            <h2 className="text-2xl font-bold text-[#151875] font-[josefin-sans] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#8A8FB9] font-[lato] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget tristique lorem. Fusce ultricies nibh eros, at fermentum
              purus aliquet eget.
            </p>

            <form>
              {/* Name and Email Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-[157px] h-[44px] bg-[#FB2E86] font-[josefin-sans] text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[650px] lg:h-[600px]">
            <img
              className="w-full h-auto"
              src="/images/contact.png"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
