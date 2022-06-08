import React from 'react'
import './catGallery.css'
import catIm1 from '../../Img/Category/12.webp'
import catIm2 from '../../Img/Category/7.webp'
import catIm3 from '../../Img/Category/20.webp'
import catIm4 from '../../Img/Category/8.webp'
import catIm5 from '../../Img/Category/21.webp'
import catIm6 from '../../Img/Category/11.webp'
import catIm7 from '../../Img/Category/1.webp'
import catIm8 from '../../Img/Category/14.webp'
import catIm9 from '../../Img/Category/27.webp'
import catIm10 from '../../Img/Category/15.webp'
import catIm11 from '../../Img/Category/25.webp'
import catIm12 from '../../Img/Category/13.webp'
import Categories from '../categories/Categories'
import dashboard_icon from '../../gobbled-svgs/svg-6.svg'
import right_arrow from '../../gobbled-svgs/svg-31.svg'

const CatGellery = () => {
    const catGallery=[
        {
          img:catIm1,
          title:"Automobile"
        },
        {
          img:catIm2,
          title:"Car"
        },
        {
          img:catIm3,
          title:"Fashion"
        },
        {
          img:catIm4,
          title:"Electronics"
        },
        {
          img:catIm5,
          title:"Mobile"
        },
        {
          img:catIm6,
          title:"Laptop"
        },
        {
          img:catIm7,
          title:"Desktop"
        },
        {
          img:catIm8,
          title:"Tablet"
        },
        {
          img:catIm9,
          title:"Fashion"
        },
        {
          img:catIm10,
          title:"Electronics"
        },
        {
          img:catIm11,
          title:"Furniture"
        },
        {
          img:catIm12,
          title:"Camera"
        }, 
      ]
  return (
    <div className='categories-gallery-container container margin-bottom'>
        <div className='flash-sale-heading margin-tittle'>
          <h2><img src={dashboard_icon}/>Flash Deals</h2>
          <span className='view-all'>View All<img src={right_arrow}/></span>
        </div>
        <div className='categories-gallery'>
        {
          catGallery.map(item=>(
            <Categories  img={item.img} title={item.title}/>
          ))
        }
        </div>
    </div>
  )
}

export default CatGellery