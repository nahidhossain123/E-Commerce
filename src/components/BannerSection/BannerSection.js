import React from 'react';
import './bannerSection.css';
import banner1 from '../../Img/banner/banner-1.webp'
import banner2 from '../../Img/banner/banner-2.webp'

const BannerSection = () => {
  return (
    <div className='banner-section-container container margin-bottom'>
        <div className='banner-section'>
            <div className='banner1'>
                <img src={banner1} alt="banner-img"/>
            </div>
            <div className='banner2'>
                <img src={banner2} alt="banner-img"/>
            </div>
        </div>
    </div>
  )
}

export default BannerSection