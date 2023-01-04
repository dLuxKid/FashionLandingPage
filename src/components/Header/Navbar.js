// REACT
import React, { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// CSS
import "./Navbar.css";
//ICONS
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navList = [
    { display: "catalogue", path: "/catalogue" },
    { display: "fashion", path: "/fashion" },
    { display: "favorite", path: "/favorite" },
    { display: "lifestyle", path: "/lifestyle" },
  ];

  const showMenu = useRef(false);
  const toggleMenu = () => {
    showMenu.current.classList.toggle("show_menu");
  };

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <NavLink to="/" className="logo">
          FASHION
        </NavLink>
      </div>
      <div className="nav" ref={showMenu}>
        <div className="navMenu" onClick={toggleMenu}>
          {navList.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={(navClass) =>
                navClass.isActive ? "active navItem" : "navItem"
              }
            >
              {item.display}
            </NavLink>
          ))}
          <NavLink to="/signup" className="signup">
            Sign Up
          </NavLink>
        </div>
      </div>
      <div className="toggleBtnContainer" onClick={toggleMenu}>
        <FaBars className="navBtn" />
      </div>
    </nav>
  );
};

export default Navbar;
