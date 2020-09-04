import React from 'react';
import { FaFreeCodeCamp, FaCodepen, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title"> Bonjour, </h1>
      <h2 className="header__subtitle"> Founders And Coders ! </h2>
      <div className="header__link">
        <a
          id="freecodecamp-link"
          href="https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFreeCodeCamp />
        </a>
        <a
          id="codepen-link"
          href="https://codepen.io/franadam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen />
        </a>
        <a
          id="github-link"
          href="https://github.com/franadam/Web-Developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
