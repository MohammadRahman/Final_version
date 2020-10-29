import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <div className="header-content-container">
      <div className="logo-container">Logo</div>
      <div className="options-container">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/report" className="option">
          New
        </Link>
        <Link to="/sign-in" className="option">
          Sign in
        </Link>
        <Link to="/" className="option">
          Chats
        </Link>
      </div>
    </div>
  );
};

export default Header;
