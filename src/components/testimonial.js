import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import img from '../images/help-bg.png'
import img2 from '../images/ex-bg.png'

SwiperCore.use([Pagination]);

const HelpBlock = () => {
    
    const slides = [];

    for(let i = 0; i < 5; i += 1){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={`https://picsum.photos/id/${i+1}/500/300`}/>
            </SwiperSlide>
        )
    }

    return(
        <div className="testimonials">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={img}
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