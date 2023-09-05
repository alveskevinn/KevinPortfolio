import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col size={6} sm={2} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kevin-pedroso/" target="_blank" rel="noreferrer"><AiFillLinkedin color="white"/></a>
              <a href="https://github.com/alveskevinn" target="_blank"><AiFillGithub color="white" rel="noreferrer"/></a>
              <a href="mailto:kevinpedrosodev@gmail.com" target="_blank"><AiFillMail color="white" rel="noreferrer"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
