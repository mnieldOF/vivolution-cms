import React from 'react'
import styled from '@emotion/styled'
import Img from '../images/oxford.png'
import Icon from './icon'

const RotateIcon = styled(Icon)`
    transform: rotate(180deg);
`

const QuoteBlock = () => {
    return(
        <div className="quote-block">
            <div className="left">
                <img src={Img} alt=""/>
            </div>
            <div className="right">
                 <div className="content-container">
                     <div className="flex">
                         <div className='quote-icons'>
                            <Icon icon='quote' size='25px'/>
                            <RotateIcon icon='quote' size='25px'/>
                         </div>
                        <p className="text">Vivolution has been fundamental in creating this collaboration with IBM and Meridian ‘IT and to help solve a global healthcare challenge.</p>
                        <span className="quotee">David Browning <span className="position">CEO</span></span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock;