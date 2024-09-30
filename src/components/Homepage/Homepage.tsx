import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../../assets/Profile Picture.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-lightBlue px-8 lg:px-32 pt-24 pb-16" id="Home">
      <div className="flex flex-wrap flex-col gap-4 md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 pr-4 flex flex-col gap-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl text-white font-jockey">Hi There!</h1>
          <h1 className="text-5xl text-white font-jockey">
            I'm Cristopher Harsono
          </h1>
          <p className="text-3xl text-white font-jockey mt-4">
            I’m a passionate full-stack developer with expertise in building
            scalable web applications using modern technologies like React,
            Node.js, and MongoDB.
          </p>
          <p className="text-3xl text-white font-jockey mt-4">
            With hands-on experience in cloud computing and a strong background
            in agile development, I strive to deliver impactful and user-centric
            solutions.
          </p>
          <motion.div
            className="flex gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/cristopher-harsono-870807201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-4xl text-white"
              />
            </a>
            <a
              href="https://github.com/Divo123-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl text-white"
              />
            </a>
            <div className="flex flex-row items-center gap-2 text-white">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl " />
              <p className="text-2xl font-jockey">
                harsonocristopher@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Cristopher Harsono"
            className="rounded-lg mx-auto md:ml-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
