import React from 'react';

import {
  FaFreeCodeCamp,
  FaCodepen,
  FaGithub,
  FaAngellist,
  FaMapMarkedAlt,
  FaPhone,
} from 'react-icons/fa';
//import { Icon } from '@iconify/react'
//import codewarsIcon from '@iconify/icons-simple-icons/codewars'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer__header">Au revoir !</div>
      <ul className="footer__profile">
        <li>
          <a
            className="col-33"
            id="freecodecamp-link"
            href="https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFreeCodeCamp /> FreeCodeCamp
          </a>
        </li>
        <li>
          <a
            className="col-33"
            id="codepen-link"
            href="https://codepen.io/franadam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen /> CodePen
          </a>
        </li>
        <li>
          <a
            className="col-33"
            id="github-link"
            href="https://github.com/franadam/Web-Developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a
            className="col-33"
            id="gitlab-link"
            href="https://gitlab.com/franadam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaAngellist /> Angellist
          </a>
        </li>
      </ul>
      <div className="footer__contact">
        <div>
          <FaMapMarkedAlt />
          <p>Address</p>
          <p>
            Rue de la Loi 170 <br />
            1040 Brussels Belgium
          </p>
        </div>
        <div>
          <FaPhone />
          <p>Phone</p>
          <p>00 800 67 89 10 11</p>
        </div>
      </div>
      <div className="footer__legal">
        © 2020 BeMyself - BeMe. All Rights Reserved. Unicorn group
      </div>
    </div>
  );
};

export default Footer;
