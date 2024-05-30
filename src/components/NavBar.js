import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

function MyNavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ width: '40%', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                activeLink === "education" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "contact_me" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact_me")}
            >
              Contact Me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/teodora-stoykova/">
                {" "}
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/people/Teodora-Stoykova/pfbid02Kzxbd66oN37NGUMxru2sK2ahzjzMf4APyYA5fBGwKxnatjRdWBZ393E19wUp2iGJl/">
                {" "}
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
