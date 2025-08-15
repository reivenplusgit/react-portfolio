import React from 'react';
import './Navbar.css'; // We'll create this later

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#about" className="navbar-brand">My Portfolio</a>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;