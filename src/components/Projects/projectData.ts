import DAMThumbnail from "../../assets/DAM thumbnail.png";
import TravelMateThumbnail from "../../assets/TravelMate.png";
import EvoGymThumbnail from "../../assets/Evogym.png";
import SuperSnooker from "../../assets/superSnooker.png";
import DrawingApp from "../../assets/drawingApp.png";
import LBJDA from "../../assets/LBJDA.png";
export type projectType = {
  name: string;
  image: any;
  description: string;
  url: string;
};

const projectData: projectType[] = [
  {
    name: "Inventory Management System",
    image: DAMThumbnail,
    description: `During my internship at Pt.Daya Agung Mandiri, I contributed to
              developing a full-stack inventory management system using React,
              Node.js, Express, and MongoDB. The solution streamlined
              operations, improving efficiency and accuracy in tracking sales,
              orders, shipments, and customers. This system significantly
              enhanced the company's overall performance, and a demo showcasing
              its capabilities is available.`,
    url: "https://inventorymanagementsystemdemo-8s2vny4vx.vercel.app/inventory",
  },
  {
    name: "TravelMate",
    image: TravelMateThumbnail,
    url: "https://github.com/Divo123-tech/TravelMate",
    description:
      "TravelMate is a full-stack, responsive MERN web application utilizing modern technologies like React Bootstrap, Tailwind CSS, and TypeScript. As the Tech Lead, I guided the team through Agile development. The app integrates over 12 RESTful APIs for real-time data on hotels, flights, and countries, with OAuth for secure authentication and comprehensive testing for stability, and Socket.io for real-time collaboration. I Fully Dockerized and deployed the application to Google Cloud Run,",
  },
  {
    name: "EvoGym",
    image: EvoGymThumbnail,
    url: "https://github.com/Divo123-tech/Evogym",
    description:
      "I made a home page for a mock gym that utilizes React, Typescript, and was deployed onto Netifly. This app was meant as a test of my abilities to design and develop an aesthetic landing page with smooth animations and effects. The page also includes a form that connects to an email API that sends me and email!",
  },
  {
    name: "Lebron James Data Analysis",
    image: LBJDA,
    url: "https://github.com/Divo123-tech/Lebron-James-Data-Analysis/blob/main/Midterm.ipynb",
    description:
      "A data analysis project done in Jupyter Notebook using Pandas, Numpy Matplotlib and BeautifulSoup, to scrape data from basketball reference, and analyze the winning impact of Lebron James over his 20 year NBA career.",
  },
  {
    name: "Super Snooker",
    image: SuperSnooker,
    url: "https://divo123-tech.github.io/super-snooker/",
    description:
      "A web-based video game made with the p5js library. This game aims to emulate the classic snooker game, with the twist of having 'super powers' and having different abilities in the game.",
  },
  {
    name: "Drawing App",
    image: DrawingApp,
    url: "https://divo123-tech.github.io/Drawing-App/",
    description:
      "A web-based drawing application made with the p5js library aiming to emulate microsoft paint. This drawing app has cut and paste features, stamps, free draw, mirror tools, as well as a custom color wheel.",
  },
];

export default projectData;
