import JS from "../../assets/JS.png";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import Python from "../../assets/Python.png";
import SQL from "../../assets/SQL.png";
import CPP from "../../assets/C++.png";
import bash from "../../assets/bash.png";
import Java from "../../assets/Java.png";
import React from "../../assets/React.png";
import NodeJS from "../../assets/nodejs.png";
import Express from "../../assets/Express.png";
import Tailwind from "../../assets/Tailwind.png";
import JWT from "../../assets/JWT.png";
import Socket from "../../assets/Socket.png";
import TS from "../../assets/TS.png";
import Bootstrap from "../../assets/Bootsrap.png";
import Docker from "../../assets/Docker.png";
import AWS from "../../assets/AWS-skills.png";
import GCP from "../../assets/GCP.png";
import Mongo from "../../assets/Mongo.png";
import NPM from "../../assets/npm.png";
import Mysql from "../../assets/Mysql.png";
export type skillDataType = {
  image: any;
  name: string;
};

const skillsData = {
  languages: [
    { image: HTML, name: "HTML5" },
    { image: CSS, name: "CSS3" },
    { image: JS, name: "JavaScript" },
    { image: Python, name: "Python" },
    { image: CPP, name: "C++" },
    { image: SQL, name: "SQL" },
    { image: Java, name: "Java" },
    { image: bash, name: "Bash" },
  ],
  frameworksAndLibraries: [
    { image: Tailwind, name: "Tailwind" },
    { image: JWT, name: "JWT" },
    { image: Socket, name: "Socket.io" },
    { image: React, name: "React" },
    { image: NodeJS, name: "Node" },
    { image: Express, name: "Express" },
    { image: TS, name: "TypeScript" },
    { image: Bootstrap, name: "Bootstrap" },
  ],
  technologies: [
    { image: Docker, name: "Docker" },
    { image: AWS, name: "AWS" },
    { image: GCP, name: "GCP" },
    { image: Mongo, name: "MongoDB" },
    { image: NPM, name: "NPM" },
    { image: Mysql, name: "MySQL" },
  ],
};

export default skillsData;
