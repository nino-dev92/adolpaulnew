import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header/header.css";

function Header() {
  return (
    <nav>
      <header className="header">
        <div className="header-logo">LOGO</div>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="header-btn-container">
          <Link to="/admissions">
            <button className="header-btn">Apply Now</button>
          </Link>
        </div>
      </header>
    </nav>
  );
}
export default Header;
