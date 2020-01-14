import React from 'react';
import bgcHeader from '../images/tlo500.jpg';

const Header = () => {
  return (
    <header className="header">
      <img className="header__bgc" src={bgcHeader} alt="Background of Header" />
      <div className="header__description">
        <p className="header__description--name">Patrycja</p>
        <p className="header__description--surname">Paczkowska</p>
        <p className="header__description--job">Junior Front-End Developer</p>
      </div>
    </header>

  );
};

export default Header;
