import React from 'react'
import {  NavLink } from 'react-router-dom'
import CategoryDrop from '../../components/CategoroyDrop/CategoryDrop'

const Navbar = () => {
  return (
    <div className='nav-container after-sticky desktop_item'>
        <div className='header container d_flex'>
          <div className='categories-btn'>
            <CategoryDrop />
          </div>
          <div className='navlink'>
            <ul className='nav f_flex'>
              <li>
                <div className='nav-dropdown'>
                  <NavLink to="/">Home</NavLink>
                  <div className='dropdown-items'>
                    <div className='items'>
                      <a href='#!'>Supper Store</a>
                      <a href='#!'>Grocery</a>
                      <a href='#!'>Niche Market1</a>
                      <a href='#!'>Niche Market2</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='nav-dropdown'>
                  <NavLink to="/pages">Pages</NavLink>
                  <div className='dropdown-items'>  
                    <div className='sub-dropdown'>
                      <div className='items'>
                        <div className='item-container'>
                          <a href='#!'>Sale Page <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>Supperddfd Store</a>
                              <a href='#!'>Grocesry</a>
                              <a href='#!'>Nichedfdf Market1</a>
                              <a href='#!'>Niche Market2</a>
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Vendor <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>Supperddfd Store</a>
                              <a href='#!'>Grocesry</a>
                              <a href='#!'>Nichedfdf Market1</a>
                              <a href='#!'>Niche Market2</a>
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Shop <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>Supperddfd Store</a>
                              <a href='#!'>Grocesry</a>
                              <a href='#!'>Nichedfdf Market1</a>
                              <a href='#!'>Niche Market2</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='nav-dropdown'>
                  <NavLink to="/pages">User Account</NavLink>
                  <div className='dropdown-items'>  
                    <div className='sub-dropdown'>
                      <div className='items'>
                        <div className='item-container'>
                          <a href='#!'>Orders <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>Order</a>
                              <a href='#!'>Order List</a>               
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Profile <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>View Profile</a>
                              <a href='#!'>Edit Profile</a>
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Address <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>Address List</a>
                              <a href='#!'>Add Address</a>
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Support Ticket <i class="fa-solid fa-caret-right"></i></a>
                          <div className='dropdown-items-items'>
                            <div className='items'>
                              <a href='#!'>All Ticket</a>
                              <a href='#!'>Ticket Details</a>
                            </div>
                          </div>
                        </div>
                        <div className='item-container'>
                          <a href='#!'>Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li><div className='nav-dropdown'><NavLink to="/vendor">Vendor Account</NavLink></div></li>
              <li><div className='nav-dropdown'><NavLink to="/vendor">Track My Order</NavLink></div></li>
              <li><div className='nav-dropdown'><NavLink to="/vendor">Contact</NavLink></div></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar