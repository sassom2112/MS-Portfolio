import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/'; // Your CSS file for styling
import '../../src/'; // Your CSS file for styling

function Header() {
  return (
    <header className="App-header">
      <div className="header-left">
      <h1 className="header-title">MICHAEL | SASSO</h1>
      </div>
      <div className="header-middle">
        <Link to="/" className="button">Home</Link>
        <Link to="/CybersecurityPortfolio" className="button">CS Portfolio</Link>
        <Link to="/about" className="button">About</Link>
      </div>
    </header>
  );
}

export default Header;
