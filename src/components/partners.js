import React from 'react'
import Img from '../images/strathclyde.png'
import Img2 from '../images/classforkids.png'
import Img3 from '../images/clinspec.png'
import Img4 from '../images/embark.png'
import Img5 from '../images/pulse.png'
import Img6 from '../images/fintech.png'
import Img7 from '../images/ibis.png'
import Img8 from '../images/ibm.png'


const Partners = () => {
    return(
        <div className="partners">
            <div className="content-container">
                <div className="grid">
                    <img src={Img} alt=""/>
                    <img src={Img2} alt=""/>
                    <img src={Img3} alt=""/>
                    <img src={Img4} alt=""/>
                    <img src={Img5} alt=""/>
                    <img src={Img6} alt=""/>
                    <img src={Img7} alt=""/>
                    <img src={Img8} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Partners;