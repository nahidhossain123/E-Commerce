import React from 'react';
import './singleCategory.css';
import right_arrow from '../../gobbled-svgs/svg-31.svg';
import flash1 from '../../Img/car/1.webp';
import flash2 from '../../Img/car/2.webp';
import flash3 from '../../Img/car/3.webp';
import flash4 from '../../Img/car/4.webp';
import flash5 from '../../Img/car/5.webp';
import flash6 from '../../Img/car/6.webp';
import ProductCard from '../ProductCard/ProductCard';


const SingleCategory = ({title}) => {
  const product_list = [
    {
      title:"Lord 2017",
      img: flash1,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Budi 2019",
      img: flash2,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Resla 2015",
      img: flash3,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Xorsche 2018",
      img: flash4,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Budi 2015",
      img: flash5,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    {
      title:"Loard 2018",
      img: flash6,
      discount:56,
      old_price:110.00,
      new_price:250.00
    },
    
  ]
  return (
    <div className='single-category-container'>
        <div className='flash-sale-heading margin-tittle'>
          <h2>{title}</h2>
          <span className='view-all'>View All<img src={right_arrow}/></span>
        </div>
      <div className='product-gellary'>
        {
          product_list.map(item=>(
          <ProductCard title={item.title} img={item.img} discount={item.discount} old_price={item.old_price} new_price={item.new_price} />
          ))
        }
        </div>
    </div>
  )
}

export default SingleCategory