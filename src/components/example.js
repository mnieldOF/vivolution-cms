import React, { useState }from 'react'


const Links = ["Work", "Services", "About", "Insights", "Contact"];

const CoverMenu = () => {

    const [ focused, setFocused ] = useState(null);
    // const [ activeIndex, setActiveIndex ] = useState();

   
    const onHover = (link) => {

        setFocused(link);
        console.log(focused);
        // setActiveIndex(index);
        
        // const siblings = e.currentTarget.parentNode.querySelectorAll('.menu-item');

        // siblings.forEach((elem, i) => {
        // if (i === activeIndex) {
        // elem.classList.add('focused', 'focused-out');
        // } else {
        //     elem.classList.add('focused-out');
        // }});
    }

    const onMouseOut = (link) => {
        setFocused(null);
    //    const siblings = e.currentTarget.parentNode.querySelectorAll('.menu-item');
        
    //     siblings.forEach((elem, i) => {
    //         elem.classList.remove('focused', 'focused-out');
    //     });
    }

    const NavLink = () => {
        return(
            Links.map((link, index) => {
                return(
                    <li 
                        onMouseOver={(e) => {
                            onHover(link);
                        }}
                        onMouseLeave={(e, index) => {
                            onMouseOut(e,index);
                        }}
                        className={`type-h2 menu-item ${focused === link ? 'focused' : ''} ${focused === null ? '' : 'focused-out'}`}
                    >
                        <a className='menu-word' href="">{link}</a>
                        <div className="grayed">{link}</div>
                    </li>
                )
            })
        )
    }

    return(
        <div className="cover-menu">
            <div className="cover-background"></div>
            <div className="content-container">
                <div className="content-wrapper">
                    <nav className="primary-nav">
                        <ul>
                            <NavLink />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )

}

export default CoverMenu;