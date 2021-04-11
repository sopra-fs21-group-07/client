import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Logoutbutton } from "./Logoutbutton"
import { withRouter } from 'react-router-dom';


function Navbar(props) {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const initialData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return SidebarData.filter((item) => {return item.loggedIn});
    }
    else {
      return SidebarData.filter((item) => {return !item.loggedIn});
    }
  }
  const [data, setData] = useState(initialData);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const token = localStorage.getItem("token");
      if (token) {
        setData(SidebarData.filter((item) => {return item.loggedIn}));
      }
      else {
        setData(SidebarData.filter((item) => {return !item.loggedIn}));
      }
    })
  }, [])

  function logout(){
    try {
      localStorage.removeItem('token');
      props.history.push('/home');
    } catch (error) {
      alert("Something went wrong while logout");
    }
  }


  return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>

            <Logoutbutton
                // disabled={localStorage.getItem("token") == null}
                hidden={localStorage.getItem("token") == null} // hides the button when there is no token
                onClick={() => {
                  logout();
                }}
            >
              Logout
            </Logoutbutton>

            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {data.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
  );
}

export default withRouter(Navbar);

