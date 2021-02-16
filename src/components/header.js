import React, { useState } from "react";
import Icon from './icon';

const Header = () => {
    return(
        <div className='header'>
            <div className="container">
                <Icon icon='vivo-logo' width='100px'/>
                {/* <Icon icon='v-logo' width='50px' size={50}/> */}
                <ul>
                    <li>
                        <a href="">start up/scale up</a>
                        <a href="">corporates</a>
                        <a href="">investors</a>
                        <a href="">ecosystem builder</a>
                        <a href="">who we are</a>
                        <a href="">contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;