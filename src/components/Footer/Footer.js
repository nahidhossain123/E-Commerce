import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import playstore from '../../Img/footer/playstore.svg';
import applestore from '../../Img/footer/appstore.svg';
import facebook from '../../Img/footer/facebookicon.svg';
import twitter from '../../Img/footer/twitter.svg';
import youtube from '../../Img/footer/youtube.svg';
import google from '../../Img/footer/gogole.svg';
import instagram from '../../Img/footer/instagram.svg';
import logo from '../../Img/logo.svg';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-wrraper container'>
            <div className='footer-items'>
                <div className='footer-item1'>
                    <div className='footer-logo'>
                        <img src={logo} alt='footer-log'/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                    <div className='logos'>
                        <div className='playstore'>
                            <img src={playstore} alt="playstore logo"/>
                            <div className='details'>
                                <div>Get it on</div>
                                <div>Google Play</div>
                            </div>
                        </div>
                        <div className='playstore'>
                            <img src={applestore} alt="apple logo"/>
                            <div className='details'>
                                <div>Download on the</div>
                                <div>Apple Store</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-item2'>
                    <div className='title'>About Us</div>
                    <div className='links'>
                        <Link to="#!">Careers</Link>
                        <Link to="#!">Our Stores</Link>
                        <Link to="#!">Our Cares</Link>
                        <Link to="#!">Terms & Conditions</Link>
                        <Link to="#!">Privacy Policy</Link>
                    </div>
                </div>
                <div className='footer-item3'>
                    <div className='title'>Customer Care</div>
                    <div className='links'>
                        <Link to="#!">Help Center</Link>
                        <Link to="#!">How to Buy</Link>
                        <Link to="#!">Corporate & Bulk Purchasing</Link>
                        <Link to="#!">Corporate & Bulk Purchasing</Link>
                        <Link to="#!">Returns & Refunds</Link>
                    </div>
                </div>
                <div className='footer-item4'>
                    <div className='title'>Contact Us</div>
                    <div className='links'>
                        <span> 70 Washington Square South, New York, NY 10012, United States</span>
                        <span> Email: uilib.help@gmail.com</span>
                        <span> Phone: +1 1123 456 780s</span>
                    </div>
                    <div className='social-logos'>
                        <div className='social-icon'>
                            <img src={facebook} alt='social logos'/>
                        </div>
                        <div className='social-icon'>
                            <img src={twitter} alt='social logos'/>
                        </div>
                        <div className='social-icon'>
                            <img src={youtube} alt='social logos'/>
                        </div>
                        <div className='social-icon'>
                            <img src={google} alt='social logos'/>
                        </div>
                        <div className='social-icon'>
                            <img src={instagram} alt='social logos'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer