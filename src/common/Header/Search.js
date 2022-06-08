import React,{useState} from 'react';
import SelectDropdown from '../../components/Select/SelectDropdown';
import user from '../../gobbled-svgs/svg-4.svg';
import cart from '../../gobbled-svgs/svg-5.svg';
import logo from '../../Img/logo.svg';

const Search = () => {
  const [navPosition, setNavPosition] =useState(false);

  const ChangeNavPosition = ()=>{
    if(window.scrollY>=50)
    {
      setNavPosition(true);
    }else{
      setNavPosition(false);
    }
  };
  window.addEventListener('scroll',ChangeNavPosition)
  const categories = [
    {
      name:"All Categories",
    },
    {
      name:"Car",
    },
    {
      name:"Clothes",
    },
    {
      name:"Laptop",
    },
    {
      name:"Desktop",
    },
    {
      name:"Camera",
    },
    {
      name:"Toys",
    },
  ]
  return (
    <div className={navPosition ? 'nav-search sticky' : 'nav-search'}>
      <div className='search-container container'>
        <div className='logo desktop_item'>
          <img src={logo} alt="logo" />
        </div>
        <div className='search'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search and hit enter...'/>
          <div className='category-dropdown desktop_item'>
            <SelectDropdown items={categories} default_val={<div className='item center_flex'>All Categories<i class="fa-solid fa-angle-down"></i></div>} />
          </div>
        </div>
        <div className='user-cart desktop_item'>
          <button><img src={user} alt="user"/></button>
          <button>
            <div className='cart-container'>
              <img src={cart} alt="cart"/>
              <span className='cart-count'>0</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search