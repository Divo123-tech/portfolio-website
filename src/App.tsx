import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <NavigationBar />
      <Homepage />
      <Projects />
      <Certifications />
    </>
  );
}

export default App;
