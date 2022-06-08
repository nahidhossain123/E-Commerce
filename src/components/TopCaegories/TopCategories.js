import React from 'react';
import dashboard_icon from '../../gobbled-svgs/svg-6.svg'
import right_arrow from '../../gobbled-svgs/svg-31.svg'
import './topCategories.css';
import top_cat1 from '../../Img/category-1.webp';
import top_cat2 from '../../Img/category-2.webp';
import top_cat3 from '../../Img/category-3.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = (props)=>{
    const {onClick}= props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className='next'><i class="fa-solid fa-arrow-left"></i></button>
      </div>
    )
  }
  const PrevArrow = (props)=>{
    const {onClick}= props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className='prev'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    )
  }

const TopCategories = () => {
    const settings = {
        dots: false,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='top-categories-container container margin-bottom'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img className='title-img' src={dashboard_icon}/>Top Categories</h2>
        <span className='view-all'>View All<img src={right_arrow}/></span>
      </div>
      
      <Slider {...settings}>
        <div className='top-categories-card'>
            <div className='top-categories-img'>
                <img src={top_cat1} alt="top category img"/>
                <span className='top-cat-type'>Headphone</span>
                <span className='top-cat-orders'>3k orders this week</span>
            </div>
        </div>
        <div className='top-categories-card'>
            <div className='top-categories-img'>
                <img src={top_cat2} alt="top category img"/>
                <span className='top-cat-type'>Watch</span>
                <span className='top-cat-orders'>3k orders this week</span>
            </div>
        </div>
        <div className='top-categories-card'>
            <div className='top-categories-img'>
                <img src={top_cat3} alt="top category img"/>
                <span className='top-cat-type'>Sunglass</span>
                <span className='top-cat-orders'>3k orders this week</span>
            </div>
        </div>
        <div className='top-categories-card'>
            <div className='top-categories-img'>
                <img src={top_cat1} alt="top category img"/>
                <span className='top-cat-type'>Headphone</span>
                <span className='top-cat-orders'>3k orders this week</span>
            </div>
        </div>
        </Slider>
  </div>
  )
}

export default TopCategories