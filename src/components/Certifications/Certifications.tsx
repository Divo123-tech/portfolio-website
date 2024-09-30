import { motion } from "framer-motion";
import Certification from "./Certification";
import certificationData, { certificationType } from "./certificationData";
const Certifications = () => {
  return (
    <div id="Certifications-Container" className="py-20">
      <h1 className="font-jockey text-darkBlue text-center text-6xl">
        CERTIFICATIONS
      </h1>
      <motion.div
        className="py-8 px-16 flex justify-center lg:justify-between flex-wrap gap-8"
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {certificationData.map((certification: certificationType) => {
          return (
            <Certification
              name={certification.name}
              image={certification.image}
              url={certification.url}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Certifications;
