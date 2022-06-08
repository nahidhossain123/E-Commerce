import React from 'react';
import './topRatings.css';
import top_rated from '../../Img/toprated.svg';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import star_fill from '../../gobbled-svgs/svg-37.svg';
import star from '../../gobbled-svgs/svg-41.svg';
import camera from '../../Img/camera-1.webp';
import shoe from '../../Img/shoes-2.webp';
import phone from '../../Img/mobile.webp';
import watch from '../../Img/watch.webp';

const TopRatings = () => {
  return (
    <div className='flash-sale-container'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img src={top_rated} alt="top rated" />Top Ratings</h2>
        <span className='view-all'>View All<img src={right_arrow} alt="right arrow" /></span>
      </div>
      <div className='top-rating-card'>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={camera} alt="top-rating"/>
            </div>
            <div className='ratings'>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star} alt='rating'/>
                <span>(20)</span>
            </div>
            <span className='title'>Camera</span>
            <span className='price'>$3300</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={shoe} alt="top-rating"/>
            </div>
            <div className='ratings'>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star} alt='rating'/>
                <span>(20)</span>
            </div>
            <span className='title'>Shoe</span>
            <span className='price'>$400</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={phone} alt="top-rating"/>
            </div>
            <div className='ratings'>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star} alt='rating'/>
                <span>(20)</span>
            </div>
            <span className='title'>Phone</span>
            <span className='price'>$999</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={watch} alt="top-rating"/>
            </div>
            <div className='ratings'>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star_fill} alt='rating'/>
                <img src={star} alt='rating'/>
                <span>(20)</span>
            </div>
            <span className='title'>Watch</span>
            <span className='price'>$999</span>
        </div>
      </div>
    </div>
  )
}

export default TopRatings