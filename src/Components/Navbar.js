import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import {IconContext} from 'react-icons'
import {Link} from 'react-router-dom';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const           showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: "black"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars
                    onClick={showSidebar}
                    style={{color: '#611f2b'}}
                    />
                </Link>
            </div>
        </IconContext.Provider>
        </>
  )
}

export default Navbar