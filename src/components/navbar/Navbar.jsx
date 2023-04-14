import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { logo } from '../../assets/index';


function Navbar() {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-menu">
        <Link to="/home" className={activeLink === 0 ? 'active' : ''} onClick={() => handleClick(0)}>Home</Link>
        <Link to="/products" className={activeLink === 1 ? 'active' : ''} onClick={() => handleClick(1)}>Products</Link>
        <Link to="/design" className={activeLink === 2 ? 'active' : ''} onClick={() => handleClick(2)}>Design</Link>
        <Link to="/about" className={activeLink === 3 ? 'active' : ''} onClick={() => handleClick(3)}>About</Link>
      </div>
      <div className="navbar-icons">
        <form className="search-form" action='/products'>
          <input type="text" placeholder="Search..." />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
        <Link to="/Auth" className="navbar-icon"><FontAwesomeIcon icon={faUser} /></Link>
        <Link to="/cart" className="navbar-icon"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
    </nav>
  )
}

export default Navbar;
