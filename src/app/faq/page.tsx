import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import Banner from "../components/Banner";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold text-[#101750] ">FAQ</h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]">Faq</span>
        </p>
      </div>

      <div className="w-full h-auto py-8 bg-white flex flex-col md:flex-row justify-center items-center gap-8">
  {/* Left Side */}
  <div className="w-full md:w-[40%] leading-[30px] px-4 md:px-0">
    <h1 className="text-[#1D3178] font-bold text-[28px] md:text-[36px] text-center md:text-left">
      General Information
    </h1>

    {/* Paragraphs */}
    {[
      {
        title: "Eu dictumst cum at sed euismood condimentum?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
      },
      {
        title: "Magna bibendum est fermentum eros.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
      },
      {
        title: "Odio muskana hak eris conseekin sceleton?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
      },
      {
        title: "Elit id blandit sabara boi velit gua mara?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
      },
    ].map((para, index) => (
      <div key={index} className="pt-6">
        <h2 className="text-[#1D3178] text-[16px] font-bold">{para.title}</h2>
        <p className="text-[#A1ABCC] text-[16px]">{para.text}</p>
      </div>
    ))}
  </div>

  {/* Right Side */}
  <div className="w-full md:w-[40%] bg-[#F8F8FD] rounded-lg px-6 md:px-8 py-6">
    <h1 className="text-[#1D3178] font-bold text-[24px] text-center md:text-left">
      Ask a Question
    </h1>

    {/* Form */}
    <div className="mt-8 space-y-6">
      <input
        type="text"
        placeholder="Your Name*"
        className="text-black px-4 py-2 border-[2px] border-[#CDCEDC] font-[lato] rounded-sm w-full"
      />
      <input
        type="text"
        placeholder="Subject*"
        className="text-black px-4 py-2 border-[2px] border-[#CDCEDC] font-[lato] rounded-sm w-full"
      />
      <textarea
        placeholder="Type Your Message*"
        rows={4}
        className="text-black px-4 py-2 border-[2px] border-[#CDCEDC] font-[lato] rounded-sm w-full"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full lg:w-auto mt-6 bg-[#FB2E86] text-white py-2 px-6 rounded-sm hover:bg-pink-600 transition"
    >
      Send Mail
    </button>
  </div>
</div>



        {/* last portion */}

        <Banner/>


    </div>
  );
}
