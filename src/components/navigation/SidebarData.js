import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
    loggedIn: false

  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosLogIn />,
    cName: 'nav-text',
    loggedIn: false
  },
  {
    title: 'Register',
    path: '/registration',
    icon: <IoIcons.IoMdLogIn />,
    cName: 'nav-text',
    loggedIn: false
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text',
    loggedIn: true

  },
  {
    title: 'Profile',
    path: "/profilepage/:id",
    icon: <CgIcons.CgProfile/>,
    cName: 'nav-text',
    loggedIn: true

  },
  {
    title: 'Logout',
    path: '/home',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
    loggedIn: true
    
  }
];

