import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-title">Tommy</div>
      <a
        href="#"
        className="nav-icon"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        <span className="nav-bar"></span>
        <span className="nav-bar"></span>
        <span className="nav-bar"></span>
      </a>
      <div className={navbarOpen ? "nav-links" : "nav-links-expanded"}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
