import React from 'react'
import './service.css'
import delivery from '../../Img/service/delivery.svg'
import payment from '../../Img/service/payment.svg'
import confidence from '../../Img/service/confidence.svg'
import support from '../../Img/service/support.svg'


const Service = () => {
  return (
    <div className='service-card-container container padding-bottom'>
        <div className='service-cards'>
          <div className='service-card'>
            <div className='service-card-details'>
                <div className='img-bg'>
                  <div className='card-img'>
                    <img src={delivery} alt='service-img'/>
                  </div>
                </div>
                <span className='title'>Worldwide Delivery</span>
                <p>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-details'>
                <div className='img-bg'>
                  <div className='card-img'>
                    <img src={payment} alt='service-img'/>
                  </div>
                </div>
                <span className='title'>Worldwide Delivery</span>
                <p>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-details'>
                <div className='img-bg'>
                  <div className='card-img'>
                    <img src={confidence} alt='service-img'/>
                  </div>
                </div>
                <span className='title'>Worldwide Delivery</span>
                <p>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-details'>
                <div className='img-bg'>
                  <div className='card-img'>
                    <img src={support} alt='service-img'/>
                  </div>
                </div>
                <span className='title'>Worldwide Delivery</span>
                <p>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Service