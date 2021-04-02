import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    loggedIn: false

  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    loggedIn: false
  },
  {
    title: 'Register',
    path: '/registration',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    loggedIn: false
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    loggedIn: true

  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaIcons.FaEnvelopeOpenText />,
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