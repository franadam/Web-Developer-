import React from 'react';
//import { Icon } from '@iconify/react'
//import d3Icon from '@iconify/icons-logos/d3'

import { FaCss3, FaReact, FaHtml5 } from 'react-icons/fa';

const activateBtn = (c) => {
  var buttons = document.getElementsByClassName('btn');
  var btn = document.getElementById(c);
  var i;
  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(' btn--active', '');
  }
  btn.className += ' btn--active';
};

const filterSelection = (c) => {
  var x, i;
  x = document.getElementsByClassName('projects__title');

  activateBtn(c);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    // x[i].style.transition = '.3s';

    if (c === 'all') {
      x[i].style.display = 'block';
    } else {
      showFiltered(x[i], c);
    }
  }
};

// Show filtered elements
const showFiltered = (element, name) => {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      element.style.display = 'block';
    }
  }
};

const Projects = () => {
  return (
    <div className="projects works__projects">
      <h3>All of my Projects</h3>
      <div className="projects__filter">
        <button
          type="button"
          className="btn btn--active"
          id="all"
          onClick={() => filterSelection('all')}
        >
          All
        </button>
        <button
          type="button"
          className="btn"
          id="css"
          onClick={() => filterSelection('css')}
        >
          <FaHtml5 /> HTML / <FaCss3 /> CSS
        </button>
        <button
          type="button"
          className="btn"
          id="react"
          onClick={() => filterSelection('react')}
        >
          <FaReact /> React
        </button>
        <button
          type="button"
          className="btn"
          id="d3"
          onClick={() => filterSelection('d3')}
        >
          {' '}
          D3
        </button>
      </div>

      <div className="projects__gallery">
        <div className="projects__title react">
          <p>User Dashboard</p>
          <img
            id="img-p9"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FUser%20Dashboard.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>User Dashboard</h3>
              <p>React</p>
              <a
                className="btn"
                href="https://eloquent-aryabhata-f6b832.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title css">
          <p>Tribute Page</p>
          <img
            id="img-p1"
            className="img img--project"
            alt="project"
            src="https://www.spettacolo.eu/wp-content/uploads/2019/09/Mika-cover-nuovo-album.jpg"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Tribute Page</h3>
              <p>HTML / CSS</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/PooLjwK"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title css">
          <p>Survey Form</p>
          <img
            id="img-p2"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Survey Form</h3>
              <p>HTML / CSS</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/BaabPJx"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title css">
          <p>Product Landing Page</p>
          <img
            id="img-p3"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Product Landing Page</h3>
              <p>HTML / CSS</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/BaabPJx"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title css">
          <p>Technical Documentation Page</p>
          <img
            id="img-p4"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Technical Documentation Page</h3>
              <p>HTML / CSS</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/qBBwRKZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title react">
          <p>Random Quote Machine</p>
          <img
            id="img-p5"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Random Quote Machine</h3>
              <p>React</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/eYmMeJd"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title react">
          <p>Markdown Previewer</p>
          <img
            id="img-p6"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Markdown Previewer</h3>
              <p>React</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/WNbJvQz"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title d3">
          <p>Bar Chart</p>
          <img
            id="img-p7"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Bar Chart</h3>
              <p>D3</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/GRJqLEz"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>

        <div className="projects__title d3">
          <p>Scatterplot Graph</p>
          <img
            id="img-p8"
            className="img img--project"
            alt="project"
            src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png"
          />

          <div className="overlay">
            <div className="overlay__text">
              <h3>Scatterplot Graph</h3>
              <p>D3</p>
              <a
                className="btn"
                href="https://codepen.io/franadam/full/Exjgoag"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
