import React, { useState } from "react";
import moonIcon from "../assets/img/moon-stars.png";
import sunIcon from "../assets/img/prime_sun.png";
import { Link } from 'react-router-dom';
// import "./style/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoSrc = theme === "light" ? sunIcon : moonIcon;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu State:", !isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Wander Mate</div>
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "show-menu" : ""}`}>
        <li><Link className="a" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link className="a" to="/tripmanager" onClick={() => setIsMenuOpen(false)}>Manage Trip</Link></li>
        <li><Link className="a" to="/expense" onClick={() => setIsMenuOpen(false)}>Expense Tracker</Link></li>
        <li><Link className="a" to="/todo" onClick={() => setIsMenuOpen(false)}>To-Do</Link></li>
        <li><Link className="a" to="/itinerary" onClick={() => setIsMenuOpen(false)}>Itinerary</Link></li>
      </ul>

      <button className="theme-toggle" onClick={toggleTheme}> 
        <img
          src={logoSrc}
          alt={`${theme} theme logo`}
          className="theme-icon"
        />
      </button>
    </nav>
  );
}

export default Navbar;
