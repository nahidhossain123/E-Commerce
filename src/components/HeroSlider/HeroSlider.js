import React from 'react';
import './heroSlider.css';
import apple_watch from '../../Img/apple-watch-0.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false
  };
  return (
    <div className='hero-slider margin-bottom'>
      <div className='hero-slider container'>
        <Slider {...settings}>
          <div className='slider-item'>
              <div className='slider-details'>
                  <h1>50% Off For Your First Shopping</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                  <button>Vist Collections</button>
              </div>
              <div className='slider-img'>
                  <img src={apple_watch} alt="apple watch"/>
              </div>
          </div>
          <div className='slider-item'>
              <div className='slider-details'>
                  <h1>50% Off For Your First Shopping</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                  <button>Vist Collections</button>
              </div>
              <div className='slider-img'>
                  <img src={apple_watch} alt="apple watch"/>
              </div>
          </div>
          <div className='slider-item'>
              <div className='slider-details'>
                  <h1>50% Off For Your First Shopping</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                  <button>Vist Collections</button>
              </div>
              <div className='slider-img'>
                  <img src={apple_watch} alt="apple watch"/>
              </div>
          </div>
          <div className='slider-item'>
              <div className='slider-details'>
                  <h1>50% Off For Your First Shopping</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                  <button>Vist Collections</button>
              </div>
              <div className='slider-img'>
                  <img src={apple_watch} alt="apple watch"/>
              </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HeroSlider