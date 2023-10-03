import React, { Component } from "react";
import GitHubIcon from "../img/github.svg";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects-container">
        <div className="project-title">PORTFOLIO</div>
        <div className="project-list">
          <div className="project-project">
            <div className="project-wrapper">
              <div className="portfolio-title">Mending</div>
              <div className="portfolio-desc">
                Mending is an online platform that allows users to communicate
                and share their mental health stories. This website provides an
                interface for posting, replying, and user profile.
              </div>
              <div className="portfolio-framework">
                <span className="framework">React</span>
                <span className="framework">PostgreSQL</span>
                <span className="framework">CSS</span>
              </div>
              {/* eslint-disable-next-line */}
              <a className="portfolio-code-link" href="#">
                <span>Code</span>
                <img
                  className="portfolio-github-icon"
                  src={GitHubIcon}
                  alt=""
                />
              </a>
            </div>
            <img className="project-img img-right" src="#" alt="" />
          </div>

          <div className="project-project">
            <img className="project-img img-left" src="#" alt="" />
            <div className="project-wrapper">
              <div className="portfolio-title">Mending</div>
              <div className="portfolio-desc">
                Mending is an online platform that allows users to communicate
                and share their mental health stories. This website provides an
                interface for posting, replying, and user profile.
              </div>
              <div className="portfolio-framework">
                <span className="framework">React</span>
                <span className="framework">PostgreSQL</span>
                <span className="framework">CSS</span>
              </div>
              {/* eslint-disable-next-line */}
              <a className="portfolio-code-link" href="#">
                <span>Code</span>
                <img
                  className="portfolio-github-icon"
                  src={GitHubIcon}
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="project-project">
            <div className="project-wrapper">
              <div className="portfolio-title">Mending</div>
              <div className="portfolio-desc">
                Mending is an online platform that allows users to communicate
                and share their mental health stories. This website provides an
                interface for posting, replying, and user profile.
              </div>
              <div className="portfolio-framework">
                <span className="framework">React</span>
                <span className="framework">PostgreSQL</span>
                <span className="framework">CSS</span>
              </div>
              {/* eslint-disable-next-line */}
              <a className="portfolio-code-link" href="#">
                <span>Code</span>
                <img
                  className="portfolio-github-icon"
                  src={GitHubIcon}
                  alt=""
                />
              </a>
            </div>
            <img className="project-img img-right" src="#" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
