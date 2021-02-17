import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Icon from './icon';
import img from '../images/help-bg.png'
import imgMob from '../images/help-bg-mob.png'
import img2 from '../images/ex-bg.png'

SwiperCore.use([Pagination]);

const HelpBlock = () => {
    
    const slides = [];

    for(let i = 0; i < 5; i += 1){
        slides.push(
            <SwiperSlide key={`slide-${i}`} className='slide'>
                <Icon icon='quote' size='45'/>
                <p>The Vivolution team has been of great support, primarily through a number of funding clinics, but also by facilitating introductions to the Business Gateway, LINC, SIB and other key players in the start-up funding environment.</p>
                <div className="client">
                    <span className='name'>Gabriele Dado</span><span className='position'>CEO / BLK Global</span>
                </div>
            </SwiperSlide>
        )
    }

    return(
        <div className="testimonials">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={img}
                />
                <source media="(min-width: 0)"  
                        srcset={imgMob}
                />
                <img className='img' src={img} />
            </picture>
            <div className="container column">
                <h2 className='title'>What our Customers Say</h2>
                <div className="grid">
                    <div className="left">
                        <img src={img2} />
                    </div>
                    <div className="right">
                        <Swiper id='main' pagination> 
                            {slides}
                        </Swiper> 
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default HelpBlock