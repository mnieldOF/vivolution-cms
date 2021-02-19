import React from 'react'
import Img from '../images/gallery-big.png'
import Img2 from '../images/gallery-small.png'
import Img3 from '../images/gallery-small-2.png'
import Img4 from '../images/gallery-top.png'

const ImageGallery = () => {
    return(
        <div className="image-gallery">
            <div className="grid">
                <img src={Img}/>
                <img src={Img4}/>
                <img src={Img2}/>
                <img src={Img3}/>
            </div>
        </div>
    )
}

export default ImageGallery;