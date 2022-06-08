import './App.css';
import Header from './common/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeroSlider from './components/HeroSlider/HeroSlider';
import FlashSale from './components/Flash_sale/FlashSale';
import TopCategories from './components/TopCaegories/TopCategories';
import TopRatings from './components/TopRatings/TopRatings';
import FeatureBrand from './components/FeaturedBrand/FeatureBrand';
import NewArrivals from './components/NewArrival/NewArrivals';
import BigDiscount from './components/BigDiscount/BigDiscount';
import SingleCategory from './components/SingleCategory/SingleCategory';
import CategoryTab from './components/CategoryTab/CategoryTab';
import BannerSection from './components/BannerSection/BannerSection';
import Categories from './components/categories/Categories';
import CatGellery from './components/catGallery/CatGellery';
import MoreProducts from './components/moreProducts/MoreProducts';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';



function App() {

  return (
    <Router>
     <Header />
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
        <CategoryTab />
        <SingleCategory title="Car"/>
      </div>
      <div className='single-category container margin-bottom'>
        <CategoryTab />
        <SingleCategory title="Mobile Phones"/>
      </div>
      <BannerSection />
      <div className='single-category container margin-bottom'>
        <CategoryTab />
        <SingleCategory title="Optics/Watch"/>
      </div>
      <CatGellery />
      <MoreProducts />
      <Service />
     </main>
     <MobileNav />
     <Footer />
    </Router>
  );
}

export default App;
