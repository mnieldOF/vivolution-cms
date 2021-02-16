import React from 'react'
import Img from '../images/hero-bg.png';
import ImgMob from '../images/hero-bg-mob.png';
import Curve from '../images/Header-Curve-01.svg';

const Hero = () => {
    return(
        <div className="hero">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={Img}
                />
              <source media="(min-width: 0px)"  
                        srcset={ImgMob}
                />                  
                <img className='hero-img'src={ImgMob} />
            </picture> 
            <img src={Curve} className='curve' alt=""/>
            <div className="container">
                <h2 className="title">Building ventures that make a difference</h2>
            </div>
        </div>
    )
}

export default Hero;