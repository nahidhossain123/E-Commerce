import React from 'react';
import { Link } from 'react-router-dom';
import './mobilenav.css';


const MobileNav = () => {
  return (
    <div className='mobile-nav-container'>
        <div className='mobile-nav-links'>
            <Link to='#!' className='mobile-nav-link mobile-link-active'>
                <i class="fa-solid fa-house"></i>
                <span to='#!'>Home</span>
            </Link>
            <Link to='#!' className='mobile-nav-link'>
                <i class="fa-solid fa-border-all"></i>
                <span to='#!'>Category</span>
            </Link>
            <Link to='#!' className='mobile-nav-link'>
                <i class="fa-solid fa-bag-shopping"></i>
                <span to='#!'>Cart</span>
            </Link>
            <Link to='#!' className='mobile-nav-link'>
                <i class="fa-solid fa-user"></i>
                <span to='#!'>Account</span>
            </Link>
        </div>
    </div>
  )
}

export default MobileNav