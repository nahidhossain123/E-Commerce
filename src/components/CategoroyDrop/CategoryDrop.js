import React from 'react';
import {Link} from 'react-router-dom';
import offer1 from '../../Img/offer-1.webp';
import offer2 from '../../Img/offer-5.webp';
import './categorydrop.css';
import fashion from '../../gobbled-svgs/svg-8.svg';
import electronics from '../../gobbled-svgs/svg-9.svg';
import bikes from '../../gobbled-svgs/svg-10.svg';
import home_garden from '../../gobbled-svgs/svg-15.svg';
import gifts from '../../gobbled-svgs/svg-16.svg';
import music from '../../gobbled-svgs/svg-18.svg';
import health_beauty from '../../gobbled-svgs/svg-19.svg';
import pet from '../../gobbled-svgs/svg-20.svg';
import baby_toys from '../../gobbled-svgs/svg-21.svg';
import groceries from '../../gobbled-svgs/svg-22.svg';
import automotive from '../../gobbled-svgs/svg-23.svg';
import man from '../../gobbled-svgs/svg-11.svg';
import women from '../../gobbled-svgs/svg-12.svg';
import baby_boy from '../../gobbled-svgs/svg-13.svg';
import baby_girl from '../../gobbled-svgs/svg-14.svg';

const CategoryDrop = () => {
  return (
    <div className='categories-dropdown'>
        <button type='submit'><i className='fa-solid fa-border-all'></i><span>Categories</span><i class="fa-solid fa-angle-down"></i></button>
        <div className='categories-container'>
            <div className='categories-list'>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={fashion} alt="fashion"/></div><span>Fashion</span><i class="fa-solid fa-angle-right"></i></Link>
                    <div className='sub-category-container'>
                        <div className='sub-categories'>
                            <div className='sub-category-link'>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Man Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Women Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                            </div>
                            <a className='offer-link' href='#!'>
                            <div className='sub-category-offer'>
                                <img src={offer1} alt="subcat" />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='category category2'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={electronics} alt="electronics"/></div><span>Electronics</span><i class="fa-solid fa-angle-right"></i></Link>
                    <div className='sub-category-container'>
                        <div className='sub-categories'>
                            <div className='sub-category-link'>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Man Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Women Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                            </div>
                            <a className='offer-link' href='#!'>
                            <div className='sub-category-offer'>
                                <img src={offer2} alt="offer" />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={bikes} alt="bikes"/></div><span>Bikes</span><i class="fa-solid fa-angle-right"></i></Link>
                    <div className='sm-sub-category'>
                        <div className='sm-sub-category-container'>
                            <Link to="#!"><div className="cat-icon-container"> <img src={man} alt="fashion"/></div><span>Man</span><i class="fa-solid fa-angle-right"></i></Link>
                            <div className='sub-category-container'>
                                <div className='sub-categories'>
                                    <div className='sub-category-link'>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Man Clothes</Link>
                                            <Link to="#!">Shirt</Link>
                                            <Link to="#!">T-shirt</Link>
                                            <Link to="#!">Pant</Link>
                                            <Link to="#!">Underware</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Accessories</Link>
                                            <Link to="#!">Belt</Link>
                                            <Link to="#!">hat</Link>
                                            <Link to="#!">Watches</Link>
                                            <Link to="#!">Sunglasses</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Shoes</Link>
                                            <Link to="#!">Sneakers</Link>
                                            <Link to="#!">Sandals</Link>
                                            <Link to="#!">Formal</Link>
                                            <Link to="#!">Casual</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Bags</Link>
                                            <Link to="#!">Backpack</Link>
                                            <Link to="#!">Crossbody Bags</Link>
                                            <Link to="#!">Side Bags</Link>
                                            <Link to="#!">Slides</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Women Clothes</Link>
                                            <Link to="#!">Shirt</Link>
                                            <Link to="#!">T-shirt</Link>
                                            <Link to="#!">Pant</Link>
                                            <Link to="#!">Underware</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Accessories</Link>
                                            <Link to="#!">Belt</Link>
                                            <Link to="#!">hat</Link>
                                            <Link to="#!">Watches</Link>
                                            <Link to="#!">Sunglasses</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Shoes</Link>
                                            <Link to="#!">Sneakers</Link>
                                            <Link to="#!">Sandals</Link>
                                            <Link to="#!">Formal</Link>
                                            <Link to="#!">Casual</Link>
                                        </div>
                                        <div className='sub-category'>
                                            <Link to="#!" className='title'>Bags</Link>
                                            <Link to="#!">Backpack</Link>
                                            <Link to="#!">Crossbody Bags</Link>
                                            <Link to="#!">Side Bags</Link>
                                            <Link to="#!">Slides</Link>
                                        </div>
                                    </div>
                                    <a className='offer-link' href='#!'>
                                    <div className='sub-category-offer'>
                                        <img src={offer2} alt="offer" />
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <Link to="#!"><div className="cat-icon-container"> <img src={women} alt="fashion"/></div><span>Women</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={baby_boy} alt="fashion"/></div><span>Baby Boy</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={baby_girl} alt="fashion"/></div><span>Baby Girl</span></Link>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={home_garden} alt="home_garden"/></div><span>Home & Garden</span><i class="fa-solid fa-angle-right"></i></Link>
                    <div className='sub-category-container'>
                        <div className='sub-categories'>
                            <div className='sub-category-link'>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Man Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Women Clothes</Link>
                                    <Link to="#!">Shirt</Link>
                                    <Link to="#!">T-shirt</Link>
                                    <Link to="#!">Pant</Link>
                                    <Link to="#!">Underware</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Accessories</Link>
                                    <Link to="#!">Belt</Link>
                                    <Link to="#!">hat</Link>
                                    <Link to="#!">Watches</Link>
                                    <Link to="#!">Sunglasses</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Shoes</Link>
                                    <Link to="#!">Sneakers</Link>
                                    <Link to="#!">Sandals</Link>
                                    <Link to="#!">Formal</Link>
                                    <Link to="#!">Casual</Link>
                                </div>
                                <div className='sub-category'>
                                    <Link to="#!" className='title'>Bags</Link>
                                    <Link to="#!">Backpack</Link>
                                    <Link to="#!">Crossbody Bags</Link>
                                    <Link to="#!">Side Bags</Link>
                                    <Link to="#!">Slides</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={gifts} alt="gifts"/></div><span>Gifts</span><i class="fa-solid fa-angle-right"></i></Link>
                    <div className='sm-sub-category'>
                        <div className='sm-sub-category-container'>
                            <Link to="#!"><div className="cat-icon-container"> <img src={fashion} alt="fashion"/></div><span>Fashion</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={electronics} alt="electronics"/></div><span>Electronics</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={bikes} alt="bikes"/></div><span>Bikes</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={home_garden} alt="home_garden"/></div><span>Home & Garden</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={gifts} alt="gifts"/></div><span>Gifts</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={music} alt="music"/></div><span>Music</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={health_beauty} alt="health_beauty"/></div><span>Health & Beauty</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={pet} alt="pet"/></div><span>Pets</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={baby_toys} alt="toys"/></div><span>Baby Toys</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={groceries} alt="groceries"/></div><span>Groceries</span></Link>
                            <Link to="#!"><div className="cat-icon-container"> <img src={automotive} alt="automotive"/></div><span>Automotive</span></Link>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={music} alt="music"/></div><span>Music</span></Link>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={health_beauty} alt="health_beauty"/></div><span>Health & Beauty</span></Link>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={pet} alt="pet"/></div><span>Pets</span></Link>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={baby_toys} alt="toys"/></div><span>Baby Toys</span></Link>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={groceries} alt="groceries"/></div><span>Groceries</span></Link>
                </div>
                <div className='category'>
                    <Link to="#!"><div className="cat-icon-container"> <img src={automotive} alt="automotive"/></div><span>Automotive</span></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CategoryDrop