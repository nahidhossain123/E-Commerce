import React from 'react'
import BannerSection from '../../components/BannerSection/BannerSection'
import BigDiscount from '../../components/BigDiscount/BigDiscount'
import CategoryTab from '../../components/CategoryTab/CategoryTab'
import CatGellery from '../../components/catGallery/CatGellery'
import FeatureBrand from '../../components/FeaturedBrand/FeatureBrand'
import FlashSale from '../../components/Flash_sale/FlashSale'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import MoreProducts from '../../components/moreProducts/MoreProducts'
import NewArrivals from '../../components/NewArrival/NewArrivals'
import Service from '../../components/Service/Service'
import SingleCategory from '../../components/SingleCategory/SingleCategory'
import TopCategories from '../../components/TopCaegories/TopCategories'
import TopRatings from '../../components/TopRatings/TopRatings'

const Home = () => {
  return (
    <>
      <main>
        <HeroSlider />
        <FlashSale />
        <TopCategories />
        <div className='top-rating-feature container margin-bottom'>
          <TopRatings />
          <FeatureBrand />
        </div>
        <NewArrivals />
        <BigDiscount />
        <div className='single-category container margin-bottom'>
          <CategoryTab/>
          <SingleCategory title="Cars"/>
        </div>
        <div className='single-category container margin-bottom'>
          <CategoryTab/>
          <SingleCategory title="Mobile Phones"/>
        </div>
        <BannerSection />
        <div className='single-category container margin-bottom'>
          <CategoryTab/>
          <SingleCategory title="Optics/Watches"/>
        </div>
        <CatGellery />
        <MoreProducts />
        <Service />
      </main>
    </>
  )
}

export default Home