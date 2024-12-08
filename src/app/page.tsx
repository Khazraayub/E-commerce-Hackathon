import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeatureProducts'
import LatestProducts from './components/LatestProducts'
import Discount from './components/Discount'
import Newslater from './components/Newslater'
import Offer from './components/Offer'
import Trending from './components/Trending'
import TrendingProducts from './components/TrendingProducts'
import TopCategories from './components/TopCategories'
import Banner from './components/Banner'

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Offer/>
      <Trending/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Newslater/>
      <Banner/>

    </div>
  )
}
