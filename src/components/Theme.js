import React, { useState, useEffect } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    if (lsTheme && lsTheme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      setTheme(lsTheme);
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <div className="theme-container" onClick={toggleTheme}>
      <i className="fa-solid fa-moon"></i>
    </div>
  );
};

export default Theme;
