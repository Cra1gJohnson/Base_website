import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="nav">
      <Link to='/' className="nav-link">
        <h3>Home</h3>
      </Link>
      <Link to='/resume' className="nav-link">
        <h3>Resume</h3>
      </Link>
      <Link to='/work-experience' className="nav-link">
        <h3>Work Experience</h3>
      </Link>
      <Link to='/projects' className="nav-link">
        <h3>Projects</h3>
      </Link>
      <Link to='/about' className="nav-link">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default NavBar;



