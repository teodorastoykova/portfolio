/* eslint-disable jsx-a11y/alt-text */
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6}>
            <img src={logo} alt="Logo"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/teodora-stoykova/">
                <img src={navIcon1} />
              </a>
              <a href="https://www.facebook.com/people/Teodora-Stoykova/pfbid02Kzxbd66oN37NGUMxru2sK2ahzjzMf4APyYA5fBGwKxnatjRdWBZ393E19wUp2iGJl/">
                <img src={navIcon2} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
