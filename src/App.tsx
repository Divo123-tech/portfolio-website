import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import { useState } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const handlePreloaderComplete = () => {
    setAnimationComplete(true);
  };
  if (!animationComplete) {
    return <Preloader onLoaded={handlePreloaderComplete} />;
  }
  return (
    <>
      <NavigationBar />
      <Homepage />
      <Projects />
      <Certifications />
      <Skills />
    </>
  );
}

export default App;
