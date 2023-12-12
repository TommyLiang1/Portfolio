import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInFromTop,
  fadeInFromLeft,
  fadeInFromLeftSmallDelay,
  fadeInFromLeftLargeDelay,
} from "./Animations";

const Home = () => {
  const homeTitleName = useAnimation();
  const homeTitleRole = useAnimation();
  const homeDesc = useAnimation();
  const homeName = useAnimation();
  const homeLinkedIn = useAnimation();
  const homeGithub = useAnimation();
  const homeImg = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      homeTitleName.start("visible");
      homeTitleRole.start("visible");
      homeDesc.start("visible");
      homeName.start("visible");
      homeLinkedIn.start("visible");
      homeGithub.start("visible");
      homeImg.start("visible");
    }
  }, [
    homeTitleName,
    homeTitleRole,
    homeDesc,
    homeName,
    homeLinkedIn,
    homeGithub,
    homeImg,
    inView,
  ]);

  return (
    <section id="home">
      <div className="home-main">
        <motion.div
          ref={ref}
          animate={homeTitleName}
          initial="hidden"
          variants={fadeInFromTop}
          className="home-title-name"
        >
          Tommy Liang
        </motion.div>
        <motion.div
          ref={ref}
          animate={homeTitleRole}
          initial="hidden"
          variants={fadeInFromTop}
          className="home-title-role"
        >
          Software Developer
        </motion.div>
        <motion.div
          ref={ref}
          animate={homeDesc}
          initial="hidden"
          variants={fadeInFromLeft}
          className="home-desc"
        >
          Hi, I'm&nbsp;
          <motion.span
            ref={ref}
            animate={homeName}
            initial="hidden"
            variants={fadeInFromLeftLargeDelay}
            className="home-name"
          >
            Tommy Liang
          </motion.span>
          . A passionate Software Developer based in Brooklyn, New York.
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
              <i className="fa-brands fa-linkedin-in home-icon"></i>
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
              <i className="fa-brands fa-github home-icon"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
