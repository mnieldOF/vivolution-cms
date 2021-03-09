import React from 'react'
import Icon from './icon';
import Img from '../images/growth-bg.png'
import Img2 from '../images/growth2-bg.png'
import Img3 from '../images/growth3-bg.png'
import Img4 from '../images/growth4-bg.png'
import Img5 from '../images/growth5-bg.png'
import Img6 from '../images/growth6-bg.png'

const GrowthBlock = () => {
    return(
        <div className="growth-block">
            <div className="content-container column">
                <h2 className='title'>Supporting Growth</h2>
                <p>From Devs to Directors, bringing you a wealth of experience and expertise to build your business. On your terms. Invested in your business and there for the long term, no matter how bumpy the ride.</p>
                <div className="grid">
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img}
                            />
                            <img src={Img} />
                        </picture>  
                        <div className="content">
                            <Icon icon='growth' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                      
                    </div>
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img2}
                            />
                            <img src={Img2} />
                        </picture>    
                        <div className="content">
                            <Icon icon='people-square' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                     
                    </div>
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img3}
                            />
                            <img src={Img3} />
                        </picture>    
                        <div className="content">
                            <Icon icon='strategy' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                     
                    </div>
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img4}
                            />
                            <img src={Img4} />
                        </picture>    
                        <div className="content">
                            <Icon icon='tech' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                     
                    </div>
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img5}
                            />
                            <img src={Img5} />
                        </picture>    
                        <div className="content">
                            <Icon icon='strategy-alt' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                     
                    </div>
                    <div className="item">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={Img6}
                            />
                            <img src={Img6} />
                        </picture>    
                        <div className="content">
                            <Icon icon='structure' size={45}/>
                            <h4 className='e-title'>title</h4>
                            <p>text</p>
                            <a href=""><Icon icon='right' size={25}/>link</a>                            
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowthBlock;