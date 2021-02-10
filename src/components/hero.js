import React from 'react'
import Img from '../images/hero-bg.png';
import Curve from '../images/Header-Curve-01.svg';

const Hero = () => {
    return(
        <div className="hero">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={Img}
                />
                <img className='hero-img'src={Img} />
            </picture> 
            <img src={Curve} className='curve' alt=""/>
            <div className="container">
                <h2 className="title">Building ventures that make a difference</h2>
            </div>
        </div>
    )
}

export default Hero;