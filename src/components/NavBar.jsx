import React from 'react'
import './css/Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  

  
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>REACTO JOBS</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Service">Service</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        
      </ul>
  
    </nav>
  )
}

export default NavBar