import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // Import icons
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="hamburger-container">
        <GiHamburgerMenu className="hamburger" onClick={toggleDropdown} />
        {isOpen && (
          <div className="dropdown">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="dropdown-link"
            >
              <FaHome className="icon" /> Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="dropdown-link"
            >
              <FaInfoCircle className="icon" /> About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="dropdown-link"
            >
              <FaEnvelope className="icon" /> Contact
            </Link>
          </div>
        )}
      </div>
      <div className="header-title">🄿🄷🄰🄽🅃🄾🄼 🄲🄰🅁🅃</div>
    </header>
  );
};

export default Header;
