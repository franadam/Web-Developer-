import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects () {
  return (
    <div className='projects' >
      <h3>Projects</h3>
      <div className='projects__filter'>
        <button type='button'>All</button>
        <button type='button'>Javascript</button>
        <button type='button'>React</button>
        <button type='button'>D3</button>
      </div>

      <div className='projects__gallery'>
        <div className='project-title text-center'>
          <p>Tribute Page</p>
          <a href="https://codepen.io/franadam/pen/PooLjwK"
            target="_blank" >
            <img id="img-p1" className="project-image" src="https://www.spettacolo.eu/wp-content/uploads/2019/09/Mika-cover-nuovo-album.jpg" />
          </a>
        </div>

        <div className='project-title text-center'>
          <p>Survey Form</p>
          <a href="https://codepen.io/franadam/pen/BaabPJx"
            target="_blank" >
            <img id="img-p2" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png" />
          </a>
        </div>

        <div className='project-title text-center'><p>Product Landing Page</p>
          <a href="https://codepen.io/franadam/pen/WNNmqoy"
            target="_blank" >
            <img id="img-p3" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png" />
          </a>
        </div>

        <div className='project-title text-center'>
          <p>Technical Documentation Page</p>
          <a href="https://codepen.io/franadam/pen/qBBwRKZ"
            target="_blank">
            <img id="img-p4" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png" />
          </a>
        </div>

        <div className='project-title text-center'>
          <p>Random Quote Machine</p>
          <a href="https://codepen.io/franadam/pen/eYmMeJd"
            target="_blank" >
            <img id="img-p5" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png" />
          </a>
        </div>

        <div className='project-title text-center'><p>Markdown Previewer</p>
          <a href="https://codepen.io/franadam/pen/WNbJvQz"
            target="_blank">
            <img id="img-p6" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png" />
          </a>
        </div>

        <div className='project-title text-center'>
          <p>D3 Bar Chart</p>
          <a href="https://codepen.io/franadam/pen/Exjgoag"
            target="_blank">
            <img id="img-p7" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png" />
          </a>
        </div>

        <div className='project-title text-center'>
          <p>D3 Scatterplot Graph</p>
          <a href="https://codepen.io/franadam/pen/GRJqLEz"
            target="_blank">
            <img id="img-p8" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png" />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Projects
