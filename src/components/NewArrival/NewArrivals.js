import React from 'react';
import './newArrival.css';
import new_arrivals from '../../Img/new_arrivels.svg';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import newarrival1 from '../../Img/newarrival1.webp';
import newarrival2 from '../../Img/newarrival2.webp';
import newarrival3 from '../../Img/newarrival3.webp';
import newarrival4 from '../../Img/newarrival4.webp';
import newarrival5 from '../../Img/newarrival5.webp';
import newarrival6 from '../../Img/newarrival6.webp';


const NewArrivals = () => {
  return (
    <div className='new-arrival-container container margin-bottom'>
      <div className='flash-sale-heading margin-tittle'>
        <h2><img src={new_arrivals}/>New Arrivals</h2>
        <span className='view-all'>View All<img src={right_arrow}/></span>
      </div>
      <div className='top-rating-card'>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival1} alt="top-rating"/>
            </div>
            <span className='title'>Sunglass</span>
            <span className='price'>$3300</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival2} alt="top-rating"/>
            </div>
            <span className='title'>Makeup</span>
            <span className='price'>$400</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival3} alt="top-rating"/>
            </div>
            <span className='title'>Smart Watch</span>
            <span className='price'>$999</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival4} alt="top-rating"/>
            </div>
            <span className='title'>Lipstick</span>
            <span className='price'>$999</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival5} alt="top-rating"/>
            </div>
            <span className='title'>Green Plant</span>
            <span className='price'>$999</span>
        </div>
        <div className='top-rating'>
            <div className='top-rating-img'>
                <img src={newarrival6} alt="top-rating"/>
            </div>
            <span className='title'>Bonsai</span>
            <span className='price'>$999</span>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals