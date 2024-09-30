import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectType } from "./projectData";
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ name, image, description, url }: projectType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show/hide the paragraph
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="bg-lightBlue rounded-lg lg:p-12 p-4 w-5/6 lg:w-3/5 flex flex-col gap-4"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.25 }}
      variants={childVariant}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} className="rounded-lg" alt="Thumbnail" />
      </a>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h1 className="text-white font-jockey text-3xl lg:text-5xl text-center">
          {name}
        </h1>
      </a>

      {/* Revealing the text with animation */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="text-white text-lg mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} // Smooth exit animation
            transition={{ duration: 0.5 }}
          >
            <p className="text-justify ">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={toggleExpand}
      >
        <p className="text-gray-600">
          {isExpanded ? "See Less..." : "See More..."}
        </p>
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          className="text-white text-3xl"
        />
      </div>
    </motion.div>
  );
};

export default Project;
