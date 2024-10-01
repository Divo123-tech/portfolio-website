import Skill from "./Skill";
import skillsData, { skillDataType } from "./skillsData";

const Skills = () => {
  return (
    <div
      className="bg-lightBlue flex flex-col items-center justify-center gap-8"
      id="Skills-Container"
    >
      <h1 className="font-jockey text-6xl text-white text-center pt-24">
        SKILLS
      </h1>
      <h2 className="text-center text-gray-300 text-4xl font-jockey">
        Languages
      </h2>
      <div className="justify-around flex flex-row gap-24 flex-wrap">
        {skillsData.languages.map((skill: skillDataType) => {
          return <Skill name={skill.name} image={skill.image} />;
        })}
      </div>
      <h2 className="text-center text-gray-300 text-4xl font-jockey ">
        Frameworks/Libraries
      </h2>
      <div className="justify-around flex flex-row gap-24 flex-wrap">
        {skillsData.frameworksAndLibraries.map((skill: skillDataType) => {
          return <Skill name={skill.name} image={skill.image} />;
        })}
      </div>
      <h2 className="text-center text-gray-300 text-4xl font-jockey ">
        Technologies
      </h2>
      <div className="justify-around flex flex-row gap-24 flex-wrap">
        {skillsData.technologies.map((skill: skillDataType) => {
          return <Skill name={skill.name} image={skill.image} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
