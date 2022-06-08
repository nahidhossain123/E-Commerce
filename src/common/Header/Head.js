import React from 'react';
import SelectDropdown from '../../components/Select/SelectDropdown';
import usflag from '../../Img/usa.png';
import ukflag from '../../Img/uk.png';
import bdflag from '../../Img/bd.png';
import inflag from '../../Img/in.png';
import logo from '../../Img/logo.svg';

const Head = () => {
    const language =[
        {
            name:"EN",
            flag:usflag
        },
        {
            name:"BN",
            flag:bdflag
        },
        {
            name:"HN",
            flag:inflag
        }
    ]
    const currency =[
        {
            name:"USD",
            flag:usflag
        },
        {
            name:"EUR",
            flag:ukflag
        },
        {
            name:"BDT",
            flag:bdflag
        },
        {
            name:"INR",
            flag:inflag
        }
    ]
  return (
    <div>
        <section className='head center_flex'>
            <div className='container d_flex'>
                <div className='logo mobile_item'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='left row center_flex desktop_item'>
                    <div className='phone center_flex'>
                        <i class="fa-solid fa-phone"></i>
                        <label>+88018 5556 4445</label>
                    </div>
                    <div className='email center_flex'>
                        <i class="fa-solid fa-envelope"></i>
                        <label>support@ui-lib.com</label>
                    </div>
                </div>
                <div className='right row text_r center_flex'>
                    <label className='desktop_item'>Theme FAQ's</label>
                    <label className='desktop_item'>Need Helps?</label>
                    <SelectDropdown items={language} default_val={<div className='item center_flex'><img src={usflag} alt="flag_image"/>UN<i class="fa-solid fa-angle-down"></i></div>}/>
                    <SelectDropdown items={currency} default_val={<div className='item center_flex'><img src={usflag} alt="flag_image"/>USD<i class="fa-solid fa-angle-down"></i></div>}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Head