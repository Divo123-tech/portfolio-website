import { motion } from "framer-motion";
import { certificationType } from "./certificationData";
const Certification = ({ name, image, url }: certificationType) => {
  return (
    <motion.div className="w-5/6 md:w-1/3 lg:w-1/4 hover:bg-lightBlue hover:text-white shadow-lg border-darkBlue border-2 rounded-xl px-4 py-8 flex flex-col justify-between">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image}></img>
        <h1 className="text-3xl text-center font-jockey">{name}</h1>
      </a>
    </motion.div>
  );
};

export default Certification;
