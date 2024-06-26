import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import personal_description from "../data/personal_description";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = [
    "A Junior Web Developer",
    "Beginner Web Programmer",
    "A Software Engineer",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedtext = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedtext);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedtext === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedtext === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my portfolio</span>
            <h1>
              {"Hi I'm Teodora "}
              <span className="wrap">{text}</span>
            </h1>
            <p>{personal_description}</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
