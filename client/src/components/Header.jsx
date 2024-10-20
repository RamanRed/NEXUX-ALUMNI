/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="text-2xl font-bold">PCCOE Student Dashboard</h1>
        <nav>
          <Link to="/dashboard">
            <button className="header-button">Dashboard</button>
          </Link>
          <Link to="/alumni-directory">
            <button className="header-button">Alumni Directory</button>
          </Link>
          <Link to="/events">
            <button className="header-button">Events</button>
          </Link>
          <Link to="/career-resources">
            <button className="header-button">Career Resources</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
