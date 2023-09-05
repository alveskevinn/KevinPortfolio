
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import LanguageTag from './LanguageTag';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const skills = [
    {
      description: "JavaScript",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    },
    {
      description: "React",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      description: "MySQL",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      description: "PHP",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
    },
    {
      description: "VueJS",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      description: "Linux",
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    }

  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Iniciei estudando de forma dedicada Front-End, busco continuar desenvolvendo e aprimorando minhas habilidades. Atualmente, estou estudando Back-end e almejo me tornar um desenvolvedor Full Stack. Algumas das minhas skills abaixo:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => 
                                <LanguageTag key={index} {...skill} />)}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
