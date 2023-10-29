import React, { useEffect } from "react";
import GitHubIcon from "../images/github.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInFromTop } from "./Animations";

import "../styles/ProjectInfo.css";

const ProjectInfo = (props) => {
  const { title, desc, frameworks, githubUrl, demoUrl, leftImg, rightImg } =
    props.project;
  const allProjectControls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) allProjectControls.start("visible");
  }, [allProjectControls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={allProjectControls}
      initial="hidden"
      variants={fadeInFromTop}
      className="project-wrapper"
    >
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
          {frameworks?.map((framework, i) => {
            return (
              <span key={i} className="portfolio-framework">
                {framework}
              </span>
            );
          })}
        </div>
        <div className="portfolio-link-wrapper">
          {/* eslint-disable-next-line */}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <div className="portfolio-link">
                Code
                <img
                  className="portfolio-github-icon"
                  src={GitHubIcon}
                  alt=""
                />
              </div>
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <div className="portfolio-link">Demo</div>
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
    </motion.div>
  );
};

export default ProjectInfo;
