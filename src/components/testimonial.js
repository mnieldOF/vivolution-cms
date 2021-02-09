import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import img from '../images/help-bg.png'
import img2 from '../images/ex-bg.png'

const HelpBlock = () => {
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
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <p>The Vivolution team has been of great support, primarily through a number of funding clinics, but also by facilitating introductions to the Business Gateway, LINC, SIB and other key players in the start-up funding environment.</p>
                                <span></span>
                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper> 
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default HelpBlock