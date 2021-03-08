import React from 'react'
import Img from '../images/portfolio-bg.png'
import Ibis from '../images/ibis-small.png'
import Icon from './icon'

const PortfolioItem = () => {
    return(
        <div className="portfolio-item">
            <div className="top">
                <img src={Img} alt=""/>
            </div>
            <div className="bottom">
                <div className="flex">
                    <div className="left">
                        <h5>Oxford Cancer Biomakers</h5>
                    </div>
                    <div className="right">
                        <img src={Ibis} alt=""/>
                    </div>
                </div>
                <div className="text">
                    <p>Bringing OCB and IBM together to advance survival from colon cancer</p>
                </div>
                <div className="link">
                    <a href=""><Icon icon='' />read more</a>
                </div>
            </div>
        </div>  
    )

}

export default PortfolioItem