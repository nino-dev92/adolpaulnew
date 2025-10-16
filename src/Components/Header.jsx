import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Header/header.css";
import logo from "/LOGO.png";

function Header() {
  return (
    <nav>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" width={120} />
        </div>
        <div className="header-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/facilities">Facilities</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="header-btn-container">
          <NavLink to="/admissions">
            <button className="header-btn">Apply Now</button>
          </NavLink>
        </div>
      </header>
    </nav>
  );
}
export default Header;
