import React from "react";
import GitHubIcon from "../img/github.svg";
import ArtGalleryImage from "../img/artgallery.jpg";
import MendingImage from "../img/mending.png";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="project-title">PORTFOLIO</div>
      <div className="project-list">
        <div className="project-project">
          <div className="project-wrapper">
            <div className="portfolio-title">Mending</div>
            <div className="portfolio-desc">
              Mending is an online platform that allows users to communicate and
              share their mental health stories. This website provides an
              interface for posting, replying, checking out stress relievers,
              and user profiles.
            </div>
            <div className="portfolio-framework">
              <span className="framework">React</span>
              <span className="framework">PostgreSQL</span>
              <span className="framework">CSS</span>
            </div>
            {/* eslint-disable-next-line */}
            <a
              className="portfolio-code-link"
              href="https://github.com/TommyLiang1/Capstone_Final_Project"
              target="_blank"
            >
              <span>Code</span>
              <img className="portfolio-github-icon" src={GitHubIcon} alt="" />
            </a>
          </div>
          <div>
            <img className="project-img img-right" src={MendingImage} alt="" />
          </div>
        </div>

        <div className="project-project">
          <div>
            <img className="project-img img-left" src={MendingImage} alt="" />
          </div>
          <div className="project-wrapper">
            <div className="portfolio-title">Spotify++</div>
            <div className="portfolio-desc">
              Spotify++ is a web app that allows users create and manage their
              own playlist of mp3 files. This website is created with AWS
              Amplify and S3.
            </div>
            <div className="portfolio-framework">
              <span className="framework">React</span>
              <span className="framework">AWS</span>
              <span className="framework">CSS</span>
            </div>
            {/* eslint-disable-next-line */}
            <a className="portfolio-code-link" href="#">
              <span>Code</span>
              <img className="portfolio-github-icon" src={GitHubIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="project-project">
          <div className="project-wrapper">
            <div className="portfolio-title">Google Sprint Program</div>
            <div className="portfolio-desc">
              This web app is an art gallery that hosts artists and their
              artworks for users to see. This website provides an art gallery,
              singular image modal, and virtual reality interface. (Created on
              Google Cloud)
            </div>
            <div className="portfolio-framework">
              <span className="framework">HTML</span>
              <span className="framework">CSS</span>
              <span className="framework">JavaScript</span>
            </div>
            {/* eslint-disable-next-line */}
            <a
              className="portfolio-code-link"
              href="https://github.com/TommyLiang1/summer22-sps-28"
              target="_blank"
            >
              <span>Code</span>
              <img className="portfolio-github-icon" src={GitHubIcon} alt="" />
            </a>
          </div>
          <div>
            <img
              className="project-img img-right"
              src={ArtGalleryImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
