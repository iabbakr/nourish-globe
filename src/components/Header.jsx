import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';


const Header = () => (
  <header className="header">
    <div className="logo">
      <img className="logo-img"src={Logo} alt="logo"/>
    </div>
    <nav>
      <Link className="nav-i" to="/">Home</Link>
      <Link className="nav-i" to="/about">About</Link>
      <Link className="nav-i" to="./programs">Programs</Link>
      <Link className="nav-i" to="/impact">Impact</Link>
      <Link className="nav-i" to="/join-us">Join Us</Link>
      <Link className="nav-i" to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
