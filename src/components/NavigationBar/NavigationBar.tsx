import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const NavigationBar = () => {
  return (
    <Navbar className="bg-lightBlue fixed top-0 w-full z-50" expand="lg">
      <Container>
        <Nav.Link href="#Home">
          <FontAwesomeIcon icon={faHouse} className="text-4xl text-white" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto gap-12 font-josefin font-medium">
            <Nav.Link href="#Projects-Container">
              <p className="text-white text-3xl hover:bg-navigationBg rounded-full px-4 py-2 text-center">
                Projects
              </p>
            </Nav.Link>
            <Nav.Link>
              <p className="text-white text-3xl hover:bg-navigationBg rounded-full px-4 py-2 text-center">
                Certifications
              </p>
            </Nav.Link>
            <Nav.Link>
              <p className="text-white text-3xl hover:bg-navigationBg rounded-full px-4 py-2 text-center">
                Skills
              </p>
            </Nav.Link>
            <Nav.Link>
              <p className="text-white text-3xl hover:bg-navigationBg rounded-full px-4 py-2 text-center">
                Resume
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
