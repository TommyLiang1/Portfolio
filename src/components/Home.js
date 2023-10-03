import React, { Component } from "react";
import LinkedInIcon from "../img/linkedin.svg";
import GitHubIcon from "../img/github.svg";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="home-container">
        <div className="home-main">
          <div className="home-text">
            <div className="home-title">Full-Stack Developer</div>
            <div className="home-desc">
              Hi, I'm Tommy Liang. A passionate Software Developer based in
              Brooklyn, New York.
            </div>
            <div className="home-links">
              {/* eslint-disable-next-line */}
              <a
                href="https://www.linkedin.com/in/tommyliang131/"
                target="_blank"
              >
                <img className="home-icon" src={LinkedInIcon} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="https://github.com/TommyLiang1" target="_blank">
                <img className="home-icon" src={GitHubIcon} alt="" />
              </a>
            </div>
          </div>
          <img className="home-img" src="#" alt="" />
        </div>

        {/* Links to linkedin and github */}
        {/* Tech Stack I'm familiar with */}
      </div>
    );
  }
}
