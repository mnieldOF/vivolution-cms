import React from 'react'
import Icon from '../components/icon'

const ContentReveal = () => {
    return(
        <div className="content-reveal">
            <div className="grid">
                <div className="left">
                    <div className="content">
                        <h3 className='title'>Resource and Expertise for every step of the way</h3>
                        <ul>
                            <li><a>Realise your growth potential<Icon icon="down" size='20px'/></a></li>
                            <li><a>Develop New Products<Icon icon="down" size='20px'/></a></li>
                            <li><a>Feasbility and validation<Icon icon="down" size='20px'/></a></li>
                            <li><a>Commercial Strategy<Icon icon="down" size='20px'/></a></li>
                            <li><a>Investment Strategy<Icon icon="down" size='20px'/></a></li>
                            <li><a>Operational Structure<Icon icon="down" size='20px'/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <p>Putting the team and resources you need in place now to help you accelerate growth</p>
                        <h4>Our Vivolution Partners</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentReveal;