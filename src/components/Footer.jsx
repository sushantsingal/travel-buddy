import React from "react";
import { Link } from 'react-router-dom';
import lightLogo from "../assets/img/Group-2.png";
import darkLogo from "../assets/img/Group-1.png";

function footer({theme}) {
    const logoSrc = theme === "light" ? lightLogo : darkLogo;
    
    return (
        <div className="footer">
            <nav className="footer-nav">
                <div className="footer-brand">Wander Mate</div>
                <ul className="footer-links">
                    <li><Link className="a" to="/tripmanager">Manage Trip</Link></li>
                    <li><Link className="a" to="/expense">Expense Tracker</Link></li>
                    <li><Link className="a" to="/todo">To-Do</Link></li>
                    <li><Link className="a" to="/itinerary">Itinerary</Link></li>
                </ul>
                <img
                    src={logoSrc}
                    alt={`${theme} theme logo`}
                    className="theme-icon"
                />
            </nav>
            <p>WanderMate &copy; 2024</p>
        </div>
      );
}

export default footer;
