import { motion } from "framer-motion";
import Project from "./Project";
import projectData, { projectType } from "./projectData";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const container = {
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle function to show or hide all projects
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="pt-24 flex flex-col gap-8" id="Projects-Container">
      <h1 className="text-darkBlue text-6xl font-jockey text-center">
        PROJECTS
      </h1>
      <motion.div
        id="Projects"
        className="flex justify-center flex-col items-center gap-10"
        variants={container}
      >
        {projectData
          .slice(0, showAll ? projectData.length : 3) // Show all if `showAll` is true, otherwise only show first 3
          .map((project: projectType, i: number) => (
            <Project
              key={i}
              name={project.name}
              image={project.image}
              description={project.description}
              url={project.url}
            />
          ))}
      </motion.div>
      <a href={showAll ? undefined : "#Certifications-Container"}>
        <div
          className="flex flex-col  text-3xl items-center justify-center cursor-pointer mt-8"
          onClick={toggleShowAll}
        >
          <p className="text-darkBlue">
            {showAll ? "See Less" : `See ${projectData.length - 3} More`}
          </p>
          <FontAwesomeIcon
            icon={showAll ? faChevronUp : faChevronDown}
            className=" text-darkBlue "
          />
        </div>
      </a>
    </div>
  );
};

export default Projects;
