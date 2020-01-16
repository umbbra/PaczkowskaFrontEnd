import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { GitHub } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const LinkSocial = (props) => {
  return(
    <a href={props.link} className="contact__social--item" target="_blank" rel="noopener noreferrer">
          {props.icon}
        </a>
  )
 }
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
        <LinkSocial link="https://www.facebook.com/patrycja.paczkowska.336" icon={<FacebookIcon style={style} />}/>
        <LinkSocial link="https://github.com/umbbra" icon={<GitHub style={style} />}/>
        <LinkSocial link="https://www.facebook.com/patrycja.paczkowska.336" icon={<LinkedInIcon style={style} />}/>
      </div>
      <p className="contact__copy">© 2020 Patrycja Paczkowska</p>
    </section>
  );
};

export default Footer;
