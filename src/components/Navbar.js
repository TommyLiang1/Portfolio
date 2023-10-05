import React, { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav">
      <div className="nav-title">Tommy</div>
      <div>
        <ul
          id="nav-links"
          className={clicked ? "#nav-links active" : "#nav-links"}
        >
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
      <div className="mobile">
        <i
          id="mobile-icon"
          onClick={handleClick}
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
