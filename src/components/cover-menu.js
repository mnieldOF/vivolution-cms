import React, { useState } from 'react'
import { motion } from "framer"


const Links = ["Work", "Services", "About", "Insights", "Contact"];


const CoverMenu = ({ active }) => {

    const test = {
        inactive: { 
            x: '100vw',
        },
        active: { 
            x: '0',
        },
      }

      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      };

      const listItem = {
        hidden: { 
            opacity: 0,
            x: -100,
            skewX: 5,
            transition: {
              duration: 0.5,
              ease: 'cubicBezier(0.475, 0.425, 0, 0.995)'
            },
        },
        show: { 
            opacity: 1,
            opacity: 1,
            x: 0,
            skewX: 0,
            transition: {
              duration: 0.6,
              ease: 'cubicBezier(0.475, 0.425, 0, 0.995)'
            },
        }
      };

   
    const onHover = (e, index) => {
        
        const siblings = e.currentTarget.parentNode.querySelectorAll('.menu-item');

        siblings.forEach((elem, i) => {
        if (i === index) {
            elem.classList.add('focused', 'focused-out');
        } else {
            elem.classList.add('focused-out');
        }});
    }

    const onMouseOut = (e) => {
       const siblings = e.currentTarget.parentNode.querySelectorAll('.menu-item');
        
        siblings.forEach((elem, i) => {
            elem.classList.remove('focused', 'focused-out');
        });
    }

    const NavLink = () => {
        return(
            Links.map((link, index) => {
                return(
                    <motion.li 
                        variants={listItem}
                        onMouseOver={(e) => {
                            onHover(e, index);
                        }}
                        onMouseLeave={(e) => {
                            onMouseOut(e,index);
                        }}
                        className='type-h2 menu-item'
                    >
                        <a className='menu-word' href="">{link}</a>
                        <div className="grayed">{link}</div>
                    </motion.li>
                )
            })
        )
    }

    return(
        <>
        <motion.div
            initial='inactive'
            animate={active ? 'active' : 'inactive'}
            variants={test}
            transition={{
                duration: 0,
            }}
        >
            <div className={`cover-menu ${active ? 'active' : ''}`}>
                <motion.div 
                    className={`cover-background ${active? 'active' : null}`}
                    // initial={{scale: 0}}
                    // animate={{scale: 1}}
                />
                <div className="content-container">
                    <div className="content-wrapper">
                        <nav className="primary-nav">
                            <div className="label type-comp2">Menu</div>
                            { active ? (
                                <motion.ul variants={container} initial="hidden" animate="show">
                                    <NavLink />
                                </motion.ul>
                             ) : null } 
                        </nav>
                        <div className="comapny-info">
                            <a href="">hello@vivolution.com</a>
                            <br/>
                            <a href="">01417777777</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )

}

export default CoverMenu;