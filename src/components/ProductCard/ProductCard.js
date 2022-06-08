import React from 'react'
import eye from '../../gobbled-svgs/svg-35.svg';
import heart from '../../gobbled-svgs/svg-36.svg';
import star_fill from '../../gobbled-svgs/svg-37.svg';
import star from '../../gobbled-svgs/svg-41.svg';
import './productCard.css';

const ProductCard = ({title,img,discount,old_price,new_price}) => {
  return (
    
    <div className='flash-sale-card'>
        <div className='flash-sale-img'>
            <img src={img} alt="flash-img"/>
            <span className='offer-token'> {discount} % off</span>
            <div className='view-love-btn'>
            <img src={eye}/>
            <img src={heart}/>
            </div>
        </div>
        <div className='product-details'>
            <h3>{title}</h3>
            <div className='ratings'>
            <img src={star_fill}/>
            <img src={star_fill}/>
            <img src={star_fill}/>
            <img src={star_fill}/>
            <img src={star}/>
            </div>
            <div className='price-cart'>
            <div className='price'>
                <span className='new-price'>{old_price}</span>
                <span className='old-price'><del>{new_price}</del></span>
            </div>
            <button>+</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard