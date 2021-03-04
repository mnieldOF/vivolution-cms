import React from 'react'
import image from '../images/bg.png'

const ImageText = ({ title, text  }) => {
    return(
        <div className="image-text">
            <div className="container">
                <div className="grid">
                    <div className="left">
                        <h2 className="title">{title}</h2>
                        <p className="text">{text}</p>
                    </div>
                    <div className="right">
                        <picture>
                            <source media="(min-width: 960px)"  
                                    srcset={image}
                            />
                        <source media="(min-width: 0px)"  
                                    srcset={image}
                            />                  
                            <img className='hero-img'src={image} />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageText;