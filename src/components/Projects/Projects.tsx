import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DAMThumbnail from "../../assets/DAM thumbnail.png";

const Projects = () => {
  return (
    <div className="py-24 flex flex-col gap-8" id="Projects-Container">
      <h1 className="text-darkBlue text-6xl font-jockey text-center">
        PROJECTS
      </h1>
      <div id="Projects" className="flex justify-center">
        <div className="bg-lightBlue rounded-lg lg:p-12 p-4 w-5/6 lg:w-3/5 flex flex-col gap-4">
          <a
            href="https://inventorymanagementsystemdemo-8s2vny4vx.vercel.app/inventory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={DAMThumbnail} className="rounded-lg"></img>
          </a>
          <a
            href="https://inventorymanagementsystemdemo-8s2vny4vx.vercel.app/inventory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-white font-jockey md: text-3xl lg:text-5xl text-center">
              Inventory Management System
            </h1>
          </a>

          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">See More...</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-white text-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
