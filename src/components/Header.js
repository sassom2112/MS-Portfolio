import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Your CSS file for the header

function Header() {
  return (
    <header className="App-header">
      <div className="header-left">
        <h1>MICHAEL | SASSO</h1>
      </div>
      <div className="header-middle">
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/CybersecurityPortfolio" className="button">
        CS Portfolio
        </Link>
        <Link to="/about" className="button">
          About
        </Link>
        <Link to="/blog" className="button">
          Blog
        </Link>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </header>
  );
}

export default Header;
