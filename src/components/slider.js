import React from 'react'
import img from '../images/bg-ex.png'
import SliderImg from '../images/slider-bg.png'

const Slider = () => {
    return(
        <div className="slider">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={img}
                />
                <img className='img' src={img} />
            </picture>
            <div className="content-container">
                <div className="grid">
                    <div className="left">
                        <h2 className="title">Case studies</h2>
                    </div>
                    <div className="right">
                        <div className="item">
                            <div>
                                <img src={SliderImg} alt=""/>
                            </div>
                            <div className="meta">
                                <div>
                                    <h5>Title</h5>
                                    <img src="" alt="" className="logo"/>
                                </div>
                                <p>Bringing OCB and IBM together to advance survival from colon cancer</p>
                                <a href="">Find out more</a>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img src={SliderImg} alt=""/>
                            </div>
                            <div className="meta">
                                <div>
                                    <h5>Title</h5>
                                    <img src="" alt="" className="logo"/>
                                </div>
                                <p>Bringing OCB and IBM together to advance survival from colon cancer</p>
                                <a href="">Find out more</a>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img src={SliderImg} alt=""/>
                            </div>
                            <div className="meta">
                                <div>
                                    <h5>Title</h5>
                                    <img src="" alt="" className="logo"/>
                                </div>
                                <p>Bringing OCB and IBM together to advance survival from colon cancer</p>
                                <a href="">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;