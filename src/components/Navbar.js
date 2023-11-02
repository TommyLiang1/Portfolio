import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

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

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const targetRef = useRef([]);

  const handleMobileNavClick = () => {
    setMobileNavActive(!mobileNavActive);
  };

  // const observerCallback = (entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry.target.text);
  //     if (entry.target.text !== activeSection && entry.isIntersecting) {
  //       setActiveSection(entry.target.text);
  //     }
  //   });
  //   // setActiveSection(entry.isIntersecting);
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(observerCallback);
  //   const currentTarget = targetRef.current;
  //   if (currentTarget) {
  //     observer.observe(currentTarget);
  //   }

  //   return () => {
  //     if (currentTarget) observer.unobserve(currentTarget);
  //   };
  // }, [activeSection, setActiveSection, targetRef]);

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
          className={mobileNavActive ? "#nav-links active" : "#nav-links"}
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
            onClick={handleMobileNavClick}
            className={mobileNavActive ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
