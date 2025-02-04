import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Entre em contato</h2>
                  <form action="https://formspree.io/f/mzzdgqwg" method="POST">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="firstName"
                          value={formDetails.firstName} 
                          placeholder="Nome" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="lastName"
                          value={formDetails.lastName} 
                          placeholder="Sobrenome" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          name="email"
                          value={formDetails.email} 
                          placeholder="E-mail" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          name="phone"
                          value={formDetails.phone} 
                          placeholder="N° de Celular" 
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          name="message"
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Mensagem" 
                          onChange={(e) => onFormUpdate('message', e.target.value)} 
                          required
                        />
                        <button type="submit"><span>Enviar</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
