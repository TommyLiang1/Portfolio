import React from "react";
import GitHubIcon from "../images/github.svg";

import projectData from "../data/projectData.json";

const Projects = () => {
  console.log(projectData);
  return (
    <div id="projects" className="projects-container">
      <div className="project-title">PORTFOLIO</div>
      {projectData?.map((project) => {
        return <ProjectInfo key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;

const ProjectInfo = (props) => {
  const { title, desc, frameworks, githubUrl, demoUrl } = props.project;
  let { rightImg, leftImg } = props.project;
  console.log(leftImg + "  " + rightImg);
  return (
    <div className="project-wrapper">
      {leftImg && (
        <img
          className="portfolio-img"
          src={process.env.PUBLIC_URL + leftImg}
          alt=""
        />
      )}
      <div>
        <div className="portfolio-title">{title}</div>
        <div className="portfolio-desc">{desc}</div>
        <div>
          {frameworks?.map((framework) => {
            return <span className="portfolio-framework">{framework}</span>;
          })}
        </div>
        <div className="portfolio-link-wrapper">
          {/* eslint-disable-next-line */}
          {githubUrl && (
            <a
              className="portfolio-code-link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Code</span>
              <img className="portfolio-github-icon" src={GitHubIcon} alt="" />
            </a>
          )}
          {demoUrl && (
            <a
              className="portfolio-demo-link"
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
      {rightImg && (
        <img
          className="portfolio-img"
          src={process.env.PUBLIC_URL + rightImg}
          alt=""
        />
      )}
      <br />
    </div>
  );
};
