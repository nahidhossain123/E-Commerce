import React from 'react'
import './bigDiscount.css'
import discount from '../../Img/discount.svg';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import d1 from '../../Img/d1.webp';
import d2 from '../../Img/d2.webp';
import d3 from '../../Img/d3.webp';
import d4 from '../../Img/d4.webp';
import d5 from '../../Img/d5.webp';
import d6 from '../../Img/d6.webp';
import d7 from '../../Img/d7.webp';
import d8 from '../../Img/d8.webp';
import d9 from '../../Img/d9.webp';
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

const BigDiscount = () => {
  const settings = {
    dots: false,
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
          dots: true
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
    <div className='new-arrival-container container margin-bottom'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img src={discount}/>Big Discount</h2>
        <span className='view-all'>View All<img src={right_arrow}/></span>
      </div>
      <Slider {...settings}>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d1} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d2} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d3} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d4} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d5} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d6} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d7} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d8} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      <div className='big-discount-card'>
          <div className='card-image'>
              <img src={d9} alt='card-image'/>
          </div>
          <span className='title'>BenX 2020</span>
          <div className='price'>
            <span className='new-price'>$250</span>
            <span className='old-price'><del>$250</del></span>
          </div>
      </div>
      </Slider>
    </div>
  )
}

export default BigDiscount