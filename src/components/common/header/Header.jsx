import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

/**
 * <a href="/" className="header-logo"><img src="https://icon-library.com/images/react-icon/react-icon-13.jpg"/>
 */

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">

        <a href="/" className="header-logo"> MONT </a>
          
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
    </section>
  )
}

export default Header;

