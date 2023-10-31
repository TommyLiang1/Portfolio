import React, { useEffect } from "react";
import ProjectInfo from "./ProjectInfo";
import projectData from "../data/projectData.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "./Animations";

const Projects = () => {
  const projectTitle = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) projectTitle.start("visible");
  }, [projectTitle, inView]);
  return (
    <section id="projects">
      <motion.div
        ref={ref}
        animate={projectTitle}
        initial="hidden"
        variants={fadeIn}
        className="project-title"
      >
        PORTFOLIO
      </motion.div>
      {projectData?.map((project) => {
        return <ProjectInfo key={project.id} project={project} />;
      })}
    </section>
  );
};

export default Projects;
