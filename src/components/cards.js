import React from 'react'
import Img from '../images/oxford.png'
import Icon from './icon'

const Cards = () => {
    return(
        <div className="cards">
            <div className="content-container">
                <div className="grid">
                    <div className="item">
                        <img src={Img} alt=""/>
                        <h5>Oxford Cancer Biomakers</h5>
                    </div>
                    <div className="item">
                        <Icon icon="health-tech" size='50px'/>
                        <h5>Health tech</h5>
                    </div>
                    <div className="item">
                        <img src={Img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;