import React from "react";
import salonpiekna from "../images/salonpiekna.jpg";
import portfolio from "../images/portfolio.jpg";
import simplePage from "../images/simplePage.jpg";
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';




const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>

      <article className="projects__project">
        <div className="projects__project--about">
          <p>Salon piękności Wenus to fikcyjna firma. Strona resposywna stworzona w JavaScript, Css i Flexboxie.</p>
          <div className="projects__project--about__Boxlink"><a className="projects__project--about__Boxlink--link"href="https://umbbra.github.io/SalonPieknosci/"><VisibilityIcon /> Live</a></div>
          
          <a href="https://umbbra.github.io/SalonPieknosci/"><CodeIcon /> Code</a>
        </div>
        <img className="projects__project--img" src={salonpiekna} alt="sth" />
      </article>

      <article className="projects__project">
        <div className="projects__project--about"></div>
        <img className="projects__project--img" src={simplePage} alt="sth" />
      </article>

      <article className="projects__project">
        <div className="projects__project--about"></div>
        <img className="projects__project--img" src={portfolio} alt="sth" />
      </article>

      <article className="projects__project">
        <div className="projects__project--about"></div>
        <img className="projects__project--img" src={salonpiekna} alt="sth" />
      </article>
    </section>
  );
};

export default Projects;
