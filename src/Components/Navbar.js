import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons'
import SidebarData from './sidebarData';
import { Link } from 'react-router-dom';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "black" }}>
                <div className="navbar">
                    {/*This section is to associate a link to the menu-bar, and on click, 
                it redirects you to show the sidebar. '#' is just a placeholder. */}
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                            style={{ color: '#611f2b' }}
                        />
                    </Link>
                    <div className='navbar-container'>
                        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                            <ul className="nav-menu-items" onClick={showSidebar}>
                                <li className="navbar-toggle">
                                    <Link to="#" className="menu-bars">
                                        <IconContext.Provider value={{ color: "#611f2b" }}>
                                            <AiIcons.AiOutlineClose />
                                        </IconContext.Provider>
                                    </Link>
                                </li>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <IconContext.Provider value={{color:'#611f2b',size: '25px'}}>
                                                    {item.icon}
                                                </IconContext.Provider>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </IconContext.Provider >
        </>
    )
}

export default Navbar