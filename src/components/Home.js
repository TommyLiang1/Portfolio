import React, { useEffect } from "react";
import LinkedInIcon from "../images/linkedin.svg";
import GitHubIcon from "../images/github.svg";
import MendingImage from "../images/mending.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInFromTop,
  fadeInFromLeft,
  fadeInFromLeftSmallDelay,
  fadeInFromLeftLargeDelay,
  fadeSpinIn,
} from "./Animations";

const Home = () => {
  const homeTitle = useAnimation();
  const homeDesc = useAnimation();
  const homeLinkedIn = useAnimation();
  const homeGithub = useAnimation();
  const homeImg = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      homeTitle.start("visible");
      homeDesc.start("visible");
      homeLinkedIn.start("visible");
      homeGithub.start("visible");
      homeImg.start("visible");
    }
  }, [homeTitle, homeDesc, homeLinkedIn, homeGithub, homeImg, inView]);

  return (
    <div id="home" className="home-container">
      <div className="home-main">
        <div className="home-text">
          <motion.div
            ref={ref}
            animate={homeTitle}
            initial="hidden"
            variants={fadeInFromTop}
            className="home-title"
          >
            Full-Stack Developer
          </motion.div>
          <motion.div
            ref={ref}
            animate={homeDesc}
            initial="hidden"
            variants={fadeInFromLeft}
            className="home-desc"
          >
            Hi, I'm Tommy Liang. A passionate Software Developer based in
            Brooklyn, New York.
          </motion.div>
          <div className="home-links">
            <motion.div
              ref={ref}
              animate={homeLinkedIn}
              initial="hidden"
              variants={fadeInFromLeftLargeDelay}
            >
              {/* eslint-disable-next-line */}
              <a
                href="https://www.linkedin.com/in/tommyliang131/"
                target="_blank"
              >
                <img className="home-icon" src={LinkedInIcon} alt="" />
              </a>
            </motion.div>
            <motion.div
              ref={ref}
              animate={homeLinkedIn}
              initial="hidden"
              variants={fadeInFromLeftSmallDelay}
            >
              {/* eslint-disable-next-line */}
              <a href="https://github.com/TommyLiang1" target="_blank">
                <img className="home-icon" src={GitHubIcon} alt="" />
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          animate={homeImg}
          initial="hidden"
          variants={fadeSpinIn}
        >
          <img className="home-img" src={MendingImage} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
