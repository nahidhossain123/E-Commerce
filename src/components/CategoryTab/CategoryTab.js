import React from 'react';
import './categoryTab.css';
import v from '../../Img/v.webp';
import u from '../../Img/u.webp';

const CategoryTab = () => {
  return (
    <div className='category-tab-container desktop_item'>
        <div className='tab-btn'>
            <span>Brands</span>
            <span>|</span>
            <span>Shops</span>
        </div>
        <div className='category-tab-item-container'>
            <div className='category-tab-item-shops'>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Gray-Ban</span>
                </div>
                <div className='category-tab-item'>
                    <img src={u} alt='btn-icon'/>
                    <span>Keiss</span>
                </div>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Piccular</span>
                </div>
                <div className='category-tab-item'>
                    <img src={u} alt='btn-icon'/>
                    <span>Mapple</span>
                </div>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Saitan</span>
                </div>
                <div className='category-tab-item'>
                    <span className='btn'>View All Shops</span>
                </div>
            </div>
            <div className='category-tab-item-brands'>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Gray-Ban</span>
                </div>
                <div className='category-tab-item'>
                    <img src={u} alt='btn-icon'/>
                    <span>Keiss</span>
                </div>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Piccular</span>
                </div>
                <div className='category-tab-item'>
                    <img src={u} alt='btn-icon'/>
                    <span>Mapple</span>
                </div>
                <div className='category-tab-item'>
                    <img src={v} alt='btn-icon'/>
                    <span>Saitan</span>
                </div>
                <div className='category-tab-item'>
                    <span className='btn'>View All Brands</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryTab