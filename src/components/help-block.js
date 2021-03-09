import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from './icon';
import img from '../images/help-bg.png'
import imgMob from '../images/help-card-bg.png'



const HelpBlock = () => {
    return(
        <div className="help-block">
            <div className="content-container column">
                <h2 className='title'>Who we help</h2>
                    <div className="grid">
                        <Swiper id='main' slidesPerView={2}  
                            breakpoints={{

                                320: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 20,
                                },
                                // when window width is >= 480px
                                480: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 30
                                },
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 4,
                                    touchStartForcePreventDefault: true,
                                    spaceBetween: 40,
                                    allowTouchMove: false,
                                    shortSwipes: false,
                                }
                            }}

                        > 
                            <SwiperSlide className="help-card">
                                <picture>
                                    <source media="(min-width: 0px)"  
                                            srcset={imgMob}
                                    />
                                    <img className='card-img' src={imgMob} />
                                </picture>
                                <div className="content">
                                    <Icon icon='scaleup-Icon' size='65'/>
                                    <h4 className='c-title'>Start up / Scale up</h4>
                                    <p>Investing in companies that we believe will make a positive difference. Our team will super-charge your business by providing the expertise you need to get to the next level.</p>
                                    <a href=""><Icon icon='right' size='20' color='white'/>How we support start ups/ scale ups</a>
                                </div>                         
                            </SwiperSlide>
                            <SwiperSlide className="help-card">
                                <picture>
                                    <source media="(min-width: 0px)"  
                                            srcset={imgMob}
                                    />
                                    <img className='card-img' src={imgMob} />
                                </picture>   
                                <div className="content">
                                    <Icon icon='arrows' size='65'/>
                                    <h4 className='c-title'>Investors</h4>
                                    <p>Investing in companies that we believe will make a positive difference. Our team will super-charge your business by providing the expertise you need to get to the next level.</p>
                                    <a href=""><Icon icon='right' size='20' color='white'/>How we support Investors</a>
                                </div>                      
                            </SwiperSlide>
                            <SwiperSlide className="help-card">
                                <picture>
                                    <source media="(min-width: 0px)"  
                                            srcset={imgMob}
                                    />
                                    <img className='card-img' src={imgMob} />
                                </picture>      
                                <div className="content">
                                    <Icon icon='people' size='65'/>
                                    <h4 className='c-title'>Corporate</h4>
                                    <p>Identifying opportunities for potential Ventures. Through our portfolio of companies and collaborative projects, we have our finger on the pulse of the latest emerging tech.</p>
                                    <a href=""><Icon icon='right' size='20' color='white'/>How we support Corporates</a>
                                </div>                   
                            </SwiperSlide>
                        </Swiper>
                    </div>
            </div>
        </div>
    )
}

export default HelpBlock