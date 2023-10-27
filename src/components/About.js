import React from "react";
import MendingImage from "../images/mending.png";

const About = () => {
  return (
    <div id="about" className="about-wrapper">
      <img className="about-img" src={MendingImage} alt="" />
      <div className="about-text">
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
      </div>
    </div>
  );
};

export default About;
