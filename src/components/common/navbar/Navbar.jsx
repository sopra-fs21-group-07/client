import React from 'react';

import './Navbar.css'


/**
 * somehow it doesnt open the link & instantly redirects to login, I guess its a router problem or something
 */

 function logout() {
  try {

    //localStorage.removeItem('token');
    this.props.history.push('/');
  } catch (error) {
    alert("Somethin went wrong while logout");
  }
}

function Navbar () {

  return (
  <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/registration" className="navbar-item">Register</a>
      <a href="/login" className="navbar-item">Login</a>
      <a href="/dashboard" className="navbar-item">Dashboard</a>
      <a href="/profile" className="navbar-item">Profile</a>
      <a href="/logout" className="navbar-item">Logout</a>
  </section>
  )

}

export default Navbar;


