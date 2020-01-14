import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { GitHub } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  const style = {
    fontSize: 50
  };
  return (
    <section className="contact">
      <h2 className="contact__title">Kontakt</h2>
      <p className="contact__phone">882 - 813 - 487</p>
      <p className="contact__email">paczkowska.umbbra@gmail.com</p>
      <div className="contact__social">
        <a href="http://www.facebook.com" className="contact__social--item">
          <FacebookIcon style={style} />
        </a>
        <a href="http://linkedin.com" className="contact__social--item">
          <GitHub style={style} />
        </a>
        <a href="http://linkedin.com" className="contact__social--item">
          <LinkedInIcon style={style} />
        </a>
      </div>
      <p className="contact__copy">© 2020 Patrycja Paczkowska</p>
    </section>
  );
};

export default Footer;
