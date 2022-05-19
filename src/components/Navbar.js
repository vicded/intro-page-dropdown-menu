import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../img/icon-menu.svg";
import closeMenuIcon from "../img/icon-close-menu.svg";
import arrowDown from "../img/icon-arrow-down.svg";
import arrowUp from "../img/icon-arrow-up.svg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const menu = <img src={menuIcon} alt="menu" />;
  const closeMenu = <img src={closeMenuIcon} alt="close-menu" />;
  const displayDropdown = <img src={arrowDown} alt="display-dropdown" />;
  const closeDropdown = <img src={arrowUp} alt="close-dropdown" />;

  const navref = useRef();
  const showNavbar = () => {
    navref.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <div className="navbar">
        <div className="container navbar-container">
          <Link className="navbar-logo" to="/">
            <h1>snap</h1>
          </Link>
          <div className="menu">
            <div className="menu-button" onClick={handleClick}>
              {click ? menu : closeMenu}
            </div>
            <div className="menu-content">
              <nav ref={navref}>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">a</li>
                  <li className="nav-item">b</li>
                  <li className="nav-item">
                    <Link to="/">Careers</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">About</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-buttons">
                <button>Log in</button>
                <button>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
