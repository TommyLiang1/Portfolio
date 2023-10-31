import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ];

  return (
    <header>
      <motion.nav
        className="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <div className="nav-title">Tommy</div>
        <ul
          id="nav-links"
          className={clicked ? "#nav-links active" : "#nav-links"}
        >
          {links.map((link) => {
            return (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  className={
                    activeSection === link.name
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                  onClick={() => {
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mobile">
          <i
            id="mobile-icon"
            onClick={handleClick}
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
