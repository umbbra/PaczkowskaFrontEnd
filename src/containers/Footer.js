import React from "react";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons/";
// import { GitHub } from "@material-ui/icons";
// import LinkedInIcon from "@material-ui/icons/";

const LinkSocial = props => {
  return (
    <a
      href={props.link}
      className="contact__social--item"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.icon}
    </a>
  );
};
const Footer = () => {
  const style = {
    fontSize: 50
  };
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__phone">882 - 813 - 487</p>
      <p className="contact__email">paczkowska.umbbra@gmail.com</p>
      <div className="contact__social">
        <LinkSocial
          link="https://www.facebook.com/patrycja.paczkowska.336"
          icon={<Facebook style={style} />}
        />
        <LinkSocial
          link="https://github.com/umbbra"
          icon={<GitHub style={style} />}
        />
        <LinkSocial
          link="https://www.linkedin.com/in/patrycja-paczkowska-172667182/"
          icon={<LinkedIn style={style} />}
        />
      </div>
      <p className="contact__copy">© 2020 Patrycja Paczkowska</p>
    </section>
  );
};

export default Footer;
