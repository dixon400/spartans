import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <h1> Moringa Cars</h1>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
