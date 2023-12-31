import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, link }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Imagem do projeto apresentado" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-imgbx-acessar">
          
          <a href={link} target="_blank" rel="noreferrer">Acessar</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
