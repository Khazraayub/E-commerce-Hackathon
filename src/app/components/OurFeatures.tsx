// Supports weights 100-700
import '@fontsource-variable/josefin-sans';
import "@fontsource/lato";

export default function OurFeatures() {
  const features = [
    {
      image: "/images/offer1.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/images/offer2.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/images/offer3.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image:"/images/offer4.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ]

  return (
    <section className="w-full py-16 px-4">
      <h2 className="text-center text-4xl font-bold  text-[#151875] mb-12">
        Our Features
      </h2>
      <div className="container mx-auto w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                <div className="relative ">
                <img
                  src={feature.image}
                  
                  className="w-[65px] h-[65px] object-contain"
                />
                
                
              </div>
                </div>
                <h3 className="text-xl font-semibold  text-[#151875] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#1A0B5B4D] text-opacite-[30%] font-[lato] text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

