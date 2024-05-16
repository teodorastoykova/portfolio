
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Contact() {
    
      return (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
        
                    <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us"/>
          
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Personal Details</h2>
                    <div>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <p>Email: t.stoykova@gmail.com</p>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <p>Phone: +359 89 477 24 83</p>
                        </Col>
                        <Col size={12} className="px-1">
                          <p>Location: Sofia, Bulgaria</p>
                        </Col>
                      </Row>
                    </div>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    
}

export default Contact;