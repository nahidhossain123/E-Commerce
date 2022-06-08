import React from 'react'
import './featureBrand.css';
import featured from '../../Img/featured.svg';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import jim_jago from '../../Img/jim and jiko.webp';
import london_britches from '../../Img/london-britches.webp';

const FeatureBrand = () => {
  return (
    <div className='flash-sale-container'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img src={featured}/>Top Ratings</h2>
        <span className='view-all'>View All<img src={right_arrow}/></span>
      </div>
      <div className='top-rating-card'>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={london_britches} alt="top-rating"/>
            </div>
            <span className='title'>London Britches</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={jim_jago} alt="top-rating"/>
            </div>
            <span className='title'>Jaim & Jago</span>
        </div>
    
      </div>
    </div>
  )
}

export default FeatureBrand