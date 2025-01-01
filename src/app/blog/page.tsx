import "@fontsource-variable/josefin-sans";
import "@fontsource/lato";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";

import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "/images/recent1.jpg",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 2,
      image: "/images/recent2.jpg",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 3,
      image: "/images/recent3.jpg",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 4,
      image: "/images/recent4.jpg",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
  ];
  const sales = [
    {
      id: 1,
      image: "/images/sale1.jpg",
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
    },
    {
      id: 2,
      image: "/images/sale2.jpg",
      title: "Viverra pulvinar et enim.",
      date: "Aug 09 2020",
    },
    {
      id: 3,
      image: "/images/sale3.jpg",
      title: "Mattis varius donec fdsfd",
      date: "Aug 09 2020",
    },
  ];
  const products = [
    {
      id: 1,
      image: "/images/op1.jpg",
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
    },
    {
      id: 2,
      image: "/images/op2.jpg",
      title: "Sed placerat.",
      price: "$12.00 - $15.00",
    },
    {
      id: 3,
      image: "/images/op3.jpg",
      title: "Netus proin.",
      price: "$12.00 - $15.00",
    },
    {
      id: 4,
      image: "/images/op4.jpg",
      title: "Platea in.",
      price: "$12.00 - $15.00",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="text-start pt-5 w-full h-[200px] pl-10 bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold text-[#101750] ">Blog Page</h1>
        <p className="text-sm text-black font-[lato]">
          Home. &nbsp; Pages. &nbsp;
          <span className="text-[#FB2E86]">Blog Page</span>
        </p>
      </div>

      {/* main */}
      <div className="container px-4 py-8 flex md:flex-row flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <img
              src="/images/blog4.jpg"
              alt="Post 1"
              className="w-full h-[453px] object-cover"
            />
            <div className="flex gap-4 p-6">
              <div className="flex gap-2">
                <FaPenNib className="pt-3 text-3xl text-[#FB2E86]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Surf Auxion
                </p>
              </div>
              <div className="flex gap-2">
                <SlCalender className="pt-3 text-3xl text-[#fb8a2e]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Aug 09 2020
                </p>
              </div>
            </div>

            <h2 className="text-[30px] font-bold mb-4 text-[#151875]">
              Mauris at orci non vulputate diam tincidunt nec.
            </h2>
            <p className="text-[#8A8FB9] font-[lato] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <button className="pb-6 text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>

            <img
              src="/images/blog5.jpg"
              alt="blog 2"
              className="w-full h-[453px] object-cover"
            />
            <div className="flex gap-4 p-6">
              <div className="flex gap-2">
                <FaPenNib className="pt-3 text-3xl text-[#FB2E86]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Surf Auxion
                </p>
              </div>
              <div className="flex gap-2">
                <SlCalender className="pt-3 text-3xl text-[#fb8a2e]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Aug 09 2020
                </p>
              </div>
            </div>

            <h2 className="text-[30px] font-bold mb-4 text-[#151875]">
              Aenean vitae in aliquam ultrices lectus. Etiam.
            </h2>
            <p className="text-[#8A8FB9] font-[lato] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <button className="pb-6 text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>

            <img
              src="/images/blog6.jpg"
              alt="blog 3"
              className="w-full h-[453px] object-cover"
            />
            <div className="flex gap-4 p-6">
              <div className="flex gap-2">
                <FaPenNib className="pt-3 text-3xl text-[#FB2E86]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Surf Auxion
                </p>
              </div>
              <div className="flex gap-2">
                <SlCalender className="pt-3 text-3xl text-[#fb8a2e]" />
                <p className="bg-[#FFECE2] px-4 py-2 text-[#151875]">
                  Aug 09 2020
                </p>
              </div>
            </div>

            <h2 className="text-[30px] font-bold mb-4 text-[#151875]">
              Sit nam congue feugiat nisl, mauris amet nisi.
            </h2>
            <p className="text-[#8A8FB9] font-[lato] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <button className="pb-6 text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[60%]  mt-10 lg:mt-0">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-[22px] text-[#151875] font-bold mb-2">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Categories */}
          <div className="mb-6 ">
            <h3 className="text-[22px] text-[#151875] font-bold mb-2">
              Categories
            </h3>
            <ul className=" text-[#3F509E] grid grid-cols-2 gap-4">
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Hobies(14)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
            </ul>
          </div>

          {/* recent */}
          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold text-[#151875] mb-4">
              Recent Post
            </h2>
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="flex items-center mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-md w-[64px] h-[55px]"
                  />
                  <div className="ml-4">
                    <h3 className="text-[#3F509E] font-medium">{post.title}</h3>
                    <p className="text-[#8A8FB9] font-[lato] text-sm">
                      {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* sale product */}

          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold text-[#151875] mb-4">
              Sale Product
            </h2>
            <ul>
              {sales.map((sale) => (
                <li key={sale.id} className="flex items-center mb-4">
                  <img
                    src={sale.image}
                    alt={sale.title}
                    className="rounded-md w-[64px] h-[55px]"
                  />
                  <div className="ml-4">
                    <h3 className="text-[#3F509E] font-medium">{sale.title}</h3>
                    <p className="text-[#8A8FB9] font-[lato] text-sm">
                      {sale.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* offer products */}
          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold  text-[#151875] mb-4">
              Offer product
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-md mx-auto w-[125px] h-[80px]"
                  />
                  <h3 className="text-[#151875] font-[lato] font-[600] mt-2">
                    {product.title}
                  </h3>
                  <p className="text-[#8A8FB9] font-[lato] text-sm">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* follow */}

          <div className="p-6 max-w-xs mx-auto">
            <h2 className="text-[22px] font-bold text-[#151875] mb-4">
              Follow
            </h2>
            <div className="flex justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5625DF] text-white p-3 rounded-full hover:bg-purple-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF27B7] text-white p-3 rounded-full hover:bg-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#37DAF3] text-white p-3 rounded-full hover:bg-teal-500"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 max-w-xs mx-auto">
            <h3 className="text-[22px] font-bold text-[#151875] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-8 ">
              {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="underline text-[#151875] font-[lato] text-[16px] underline-offset-4 text-lg hover:text-[#FB2E86] cursor-pointer"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* banner */}
      <Banner/>
    </div>
  );
}
