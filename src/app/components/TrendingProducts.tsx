import ProductGrid from "../trendproducts/product-grid"
import PromotionalSections from "../trendproducts/promotional-sections"
import SidebarProducts from "../trendproducts/sidebar-products"
import "@fontsource/josefin-sans";
import "@fontsource/lato";

export default function TrendingProducts() {
  return (
    <div className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-[josefin-sans] text-[#1A0B5B] mb-12">
          Featured Products
        </h2>
      <ProductGrid/>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <PromotionalSections />
        </div>
        <div className="lg:col-span-1 mt-14">
          <SidebarProducts />
        </div>
      </div>
    </div>
  )
}

