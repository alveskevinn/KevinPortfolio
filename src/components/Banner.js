import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "DevOps",
    "Desenvolvedor Mobile",
    "Desenvolvedor Fullstack",
  ];
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
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bem vindo</span>
                  <h1>
                    {`Olá, eu sou o Kevin `}{" "}
                    <div
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-end", "Back-end", "Junior" ]'
                    >
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>
                    <strong>Desenvolvedor Fullstack</strong> com experiência em{" "}
                    <strong>web</strong> e <strong>mobile</strong>. Domínio em{" "}
                    <strong>Java</strong>, <strong>Python</strong>,{" "}
                    <strong>React</strong>, <strong>Node.js</strong>,{" "}
                    <strong>SQL</strong> e <strong>NoSQL</strong>. Expertise em{" "}
                    <strong>APIs RESTful</strong>,{" "}
                    <strong>microserviços</strong>, <strong>Scrum</strong>,{" "}
                    <strong>TDD</strong>, <strong>CI/CD</strong> e{" "}
                    <strong>Git</strong>. Foco em soluções escaláveis e{" "}
                    <strong>UX/UI</strong>.
                  </p>

                  <a
                    href="https://wa.me/5519986110518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_msg"
                  >
                    Mandar mensagem <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
