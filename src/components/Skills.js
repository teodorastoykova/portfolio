import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import skills_description from "../data/skills_description";

import javascriptIMG from "../assets/img/javascript-logo.png";
import reactIMG from "../assets/img/react_logo.png";
import gitIMG from "../assets/img/git-logo.png";
import pythonIMG from "../assets/img/python-logo.png";
import fastapiIMG from "../assets/img/fastAPI-logo.png";
import sqlIMG from "../assets/img/mysql-logo.png";
import mariaDBIMG from "../assets/img/mariadb-logo.png";
import postmanIMG from "../assets/img/postman-logo.png";
import mongoDBIMG from "../assets/img/mongodb-logo.png";

function Skills() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>{skills_description}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={javascriptIMG} alt="Zdr" />
                </div>
                <div className="item">
                  <img src={reactIMG} alt="Kartinka" />
                </div>
                <div className="item">
                  <img src={gitIMG} alt="Pic" />
                </div>
                <div className="item">
                  <img src={pythonIMG} alt="Pic" />
                </div>
                <div className="item" style={{ marginTop: '80px' }}>
                  <img src={fastapiIMG} alt="Pic" />
                </div>
                <div className="item">
                  <img src={sqlIMG} alt="Pic" />
                </div>
                <div className="item">
                  <img src={mariaDBIMG} alt="Pic" />
                  <h5>MariaDB</h5>
                </div>
                <div className="item">
                  <img src={mongoDBIMG} alt="Pic" />
                </div>
                <div className="item">
                  <img src={postmanIMG} alt="Pic" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="image5" />
    </section>
  );
}

export default Skills;
