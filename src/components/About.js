import React, { useEffect } from "react";
import MendingImage from "../images/mending.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInFromLeft, fadeInFromRight } from "./Animations";

const About = () => {
  const aboutText = useAnimation();
  const aboutImage = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      aboutText.start("visible");
      aboutImage.start("visible");
    }
  }, [aboutText, aboutImage, inView]);
  return (
    <div id="about" className="about-wrapper">
      <motion.img
        ref={ref}
        animate={aboutImage}
        initial="hidden"
        variants={fadeInFromRight}
        className="about-img"
        src={MendingImage}
        alt=""
      />
      <motion.div
        ref={ref}
        animate={aboutText}
        initial="hidden"
        variants={fadeInFromLeft}
        className="about-text"
      >
        <div className="about-me">ABOUT ME</div>
        <div className="about-title">
          A recent CS graduate from CUNY-Hunter College based in Brooklyn, New
          York
        </div>
        <div className="about-desc">
          As a Junior Full Stack Developer, I have a wide variety of experience
          with different programming languages and frameworks (HTML, CSS,
          JavaScript, React, Angular, SQL, C++, and AWS). I excel in developing
          web applications and problem solving. My expertise lies in creating
          fluid interfaces while writing clean and structured code. I am a team
          player and I enjoy collaborative coding sessions. I always aspire to
          be learning and picking up new skills wherever I go.
        </div>
      </motion.div>
    </div>
  );
};

export default About;
