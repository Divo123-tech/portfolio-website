import { skillDataType } from "./skillsData";
const Skill = ({ name, image }: skillDataType) => {
  return (
    <div className="text-center">
      <div className="bg-white p-3 border-darkBlue border-1 rounded-full">
        <img src={image}></img>
      </div>
      <p className="font-jockey text-2xl text-white">{name}</p>
    </div>
  );
};

export default Skill;
