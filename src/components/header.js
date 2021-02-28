import React, { useState } from "react";
import Icon from './icon';
import CoverMenu from './cover-menu';
import { BrowserView, isBrowser } from 'react-device-detect';


const Header = () => {

    const [ active, setActive ] = useState(false);


    const openMenu = (e) => {
        e.preventDefault();
        setActive(!active);
    }

    return(
        <>
            <div className='header'>
                    <div className="container">
                        <Icon icon='vivo-logo' width='100px'/>
                        <div className="hamburger">
                            <div className="hamburger-wrapper">
                                <div className="button">
                                    <button>
                                        <div className="background-hamburger"></div>
                                        <div className="icon-hamburger">
                                            <div className="line-center"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="click-layer"
                                onClick={(e) => openMenu(e)}
                            ></div>
                        </div>
                </div>
            </div>
            <CoverMenu active={active} />
        </>
    )
}

export default Header;