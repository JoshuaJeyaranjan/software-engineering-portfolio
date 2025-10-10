import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">

      <ul className="nav__list">
          <li>
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav__link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav__link">
              Contact
            </NavLink>
          </li>
          
        </ul>

        
        <li>
            <ThemeToggle />
          </li>
        

      
      </div>
    </nav>
  );
}

export default Nav;
