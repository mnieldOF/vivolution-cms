import React from 'react'
import Icon from './icon'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <ul className='left-menu'>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
                <Icon icon='vivo-logo'/>
                <ul className='right-menu'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;