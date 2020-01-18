import React from "react";
import photoOfMe from "../images/me.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="about__title">About me </h1>

      <section className="about__description">
        <div className="about__description__text1">
          I graduated from the Ilawa IT School, passed the E.12, E.13, E.14
          exams and went abroad to build a financial pillow. All this to become
          a Front-End Develope without studying! For this purpose, I learned
          from courses such as: Bartłomiej Borowczyk: "From zero to first job"
          and UX & UI - the art of useful design.
          <span className="hobby">Besides all that, my hobby is painting.</span>
        </div>
        <div className="about__description__image">
          <img
            className="about__description__image--picture"
            src={photoOfMe}
            alt="photo of my person"
          />
        </div>
        <div className="about__description__text2">
          <h3 className="about__description__text2--title">
            It makes me stand out:{" "}
          </h3>
          <ul className="about__description__text2--list">
            <li>Ambition to create new things,</li>
            <li>Independence, </li>
            <li>Self-discipline, </li>
            <li>Constant self-development, </li>
            <li>Stubbornness in pursuit of a goal, </li>
            <li>Quickly establishing contacts with</li>
            colleagues.
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
