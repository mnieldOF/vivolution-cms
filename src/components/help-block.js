import React from 'react'
import img from '../images/help-bg.png'

const HelpBlock = () => {
    return(
        <div className="help-block">
            <picture>
                <source media="(min-width: 960px)"  
                        srcset={img}
                />
                <img src={img} />
            </picture>
            <div className="container column">
                <h2 className='title'>Who we help</h2>
                <div className="grid">
                    <div className="help-card">
                        <img src="" alt=""/>
                        <h4 className='c-title'>Start up / Scale up</h4>
                        <p>Investing in companies that we believe will make a positive difference. Our team will super-charge your business by providing the expertise you need to get to the next level.</p>
                        <a href="">How we support start ups/ scale ups</a>
                    </div>
                    <div className="help-card">
                        <img src="" alt=""/>
                        <h4 className='c-title'>Investors</h4>
                        <p>Investing in companies that we believe will make a positive difference. Our team will super-charge your business by providing the expertise you need to get to the next level.</p>
                        <a href="">How we support Investors</a>
                    </div>
                    <div className="help-card">
                        <img src="" alt=""/>
                        <h4 className='c-title'>Corporate</h4>
                        <p>Identifying opportunities for potential Ventures. Through our portfolio of companies and collaborative projects, we have our finger on the pulse of the latest emerging tech.</p>
                        <a href="">How we support Corporates</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpBlock