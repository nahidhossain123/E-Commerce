import React from 'react';
import './categories.css';
import { Link } from 'react-router-dom';



const Categories = ({img,title}) => {
  return (
    <div className='categories-card'>
        <Link to="#!">
            <div className='categories-details'>
                <img src={img} alt='cateogries-img'/>
                <span>{title}</span>
            </div>
        </Link>
    </div>
  )
}

export default Categories