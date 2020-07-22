import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelToogle = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen)
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <button type="button" className="nav-btn" onClick={handelToogle}>
              <FaAlignRight className="nav-icon" />
            </button>
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
