import React from 'react';
import './flash_sale.css';
import lightning from '../../gobbled-svgs/svg-33.svg';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import flash1 from '../../Img/flash-1.webp';
import flash2 from '../../Img/flash-2.webp';
import flash3 from '../../Img/flash-3.webp';
import flash4 from '../../Img/flash-4.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../ProductCard/ProductCard';

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

const FlashSale = () => {
  const product_list = [
    {
      title:"Smart watch black",
      img: flash1,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Smart watch black",
      img: flash2,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Smart watch black",
      img: flash3,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Smart watch black",
      img: flash4,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Smart watch black",
      img: flash1,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Smart watch black",
      img: flash3,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    
  ]
  const settings = {
    dots: false,
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 600,
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
    <div className='flash-sale-container container margin-bottom'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img src={lightning}/>Flash Deals</h2>
        <span className='view-all'>View All<img src={right_arrow}/></span>
      </div>
      <Slider {...settings}>
        {
          product_list.map(item=>(
            <ProductCard title={item.title} img={item.img} discount={item.discount} old_price={item.old_price} new_price={item.new_price} />
          ))
        }
      </Slider>
  </div>
  )
}

export default FlashSale
