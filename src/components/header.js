import React, { useState } from "react";
import Icon from './icon';
import CoverMenu from './cover-menu';
import { motion } from "framer-motion"


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
                        <nav>
                            <div>
                                <a href="">let's chat</a>
                            </div>
                            <motion.div className="hamburger"
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }}                                                            
                            >
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
                            </motion.div>
                        </nav>  
                </div>
            </div>
            <CoverMenu active={active} />
        </>
    )
}

export default Header;