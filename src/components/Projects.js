import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projeto-img1.png";
import projImg2 from "../assets/img/projeto-img2.png";
import projImg3 from "../assets/img/projeto-img3.png";
import projImg5 from "../assets/img/Proj5.png";
import projImg6 from "../assets/img/projeto6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Barbearia TwoBrothers",
      description: "Desenvolvido com Bootstrap, HTML5, CSS3 e JavaScript",
      imgUrl: projImg1,
      link: "https://alveskevinn.github.io/projeto-barberia/",
    },
    {
      title: "Alura Books",
      description: "Projeto desenvolvido com JS consumindo API",
      imgUrl: projImg2,
      link: "https://alveskevinn.github.io/ApiCEP/",
    },
    {
      title: "Calculadora",
      description: "Feito com React",
      imgUrl: projImg3,
      link: "https://calculadora-jade-seven.vercel.app/",
    },
    {
      title: "CRM Controle",
      description: "Feito com ChakraUI e Java",
      imgUrl: projImg5,
      link: "",
    },
    {
      title: "StreamSeries",
      description: "Feito com HTML",
      imgUrl: projImg6,
      link: "https://alveskevinn.github.io/stream-series/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Esta é a minha galeria de projetos, onde a paixão pelo
                    código se transforma em soluções concretas. Cada projeto é
                    uma história de desafios enfrentados e superados, de
                    criatividade aplicada e de dedicação à excelência. Convido
                    você a percorrer essas realizações, onde a tecnologia se une
                    à inovação para criar resultados notáveis.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projetos</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
