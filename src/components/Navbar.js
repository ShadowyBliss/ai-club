import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import clubLogo from "../assets/club_logo - icon.png";
import vitLogo from "../assets/VIT Logo.png";
import Flex from "@react-css/flex";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <Flex row>
          <img src={clubLogo} alt="Club Logo" className="navbar-logo" />
          <div className="divider"></div>
          <img src={vitLogo} alt="VIT Bhopal Logo" className="navbar-logo" />
        </Flex>
      </h1>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/join-us">Join Us</NavLink>
        </li>
        {/* <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
