import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import d3Icon from '@iconify/icons-logos/d3'

function activateBtn (c) {
  var buttons = document.getElementsByClassName('btn')
  var btn = document.getElementById(c)
  var i
  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(' btn--active', '')
  }
  btn.className += ' btn--active'
}

function filterSelection (c) {
  var x, i
  x = document.getElementsByClassName('project-title')

  activateBtn(c)

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'

    if (c === 'all') {
      x[i].style.display = 'block'
    } else {
      showFiltered(x[i], c)
    }
  }
}

// Show filtered elements
function showFiltered (element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      element.style.display = 'block'
    }
  }
}

function Projects () {
  return (
    <div className='projects' >
      <h3>Projects</h3>
      <div className='projects__filter'>
        <a className='btn btn__filter btn--active' id='all' onClick={() => filterSelection('all')}>All</a>
        <a className='btn btn__filter' id='css' onClick={() => filterSelection('css')}><FontAwesomeIcon icon={['fab', 'html5']} /> HTML /  <FontAwesomeIcon icon={['fab', 'css3']} /> CSS</a>
        <a className='btn btn__filter' id='react' onClick={() => filterSelection('react')}><FontAwesomeIcon icon={['fab', 'react']} /> React</a>
        <a className='btn btn__filter' id='d3' onClick={() => filterSelection('d3')}><Icon icon={d3Icon} /> D3</a>
      </div>

      <div className='projects__gallery'>

        <div className='project-title text-center css'>
          <p>Tribute Page</p>
          <a href="https://codepen.io/franadam/pen/PooLjwK"
            target="_blank" rel="noopener noreferrer" >
            <img id="img-p1" className="img img--project" src="https://www.spettacolo.eu/wp-content/uploads/2019/09/Mika-cover-nuovo-album.jpg" />
          </a>
        </div>

        <div className='project-title text-center css'>
          <p>Survey Form</p>
          <a href="https://codepen.io/franadam/pen/BaabPJx"
            target="_blank" rel="noopener noreferrer" >
            <img id="img-p2" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png" />
          </a>
        </div>

        <div className='project-title text-center css'>
          <p>Product Landing Page</p>
          <a href="https://codepen.io/franadam/pen/WNNmqoy"
            target="_blank" rel="noopener noreferrer" >
            <img id="img-p3" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png" />
          </a>
        </div>

        <div className='project-title text-center css'>
          <p>Technical Documentation Page</p>
          <a href="https://codepen.io/franadam/pen/qBBwRKZ"
            target="_blank" rel="noopener noreferrer">
            <img id="img-p4" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png" />
          </a>
        </div>

        <div className='project-title text-center react'>
          <p>Random Quote Machine</p>
          <a href="https://codepen.io/franadam/pen/eYmMeJd"
            target="_blank" rel="noopener noreferrer" >
            <img id="img-p5" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png" />
          </a>
        </div>

        <div className='project-title text-center react'>
          <p>Markdown Previewer</p>
          <a href="https://codepen.io/franadam/pen/WNbJvQz"
            target="_blank" rel="noopener noreferrer">
            <img id="img-p6" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png" />
          </a>
        </div>

        <div className='project-title text-center d3'>
          <p>D3 Bar Chart</p>
          <a href="https://codepen.io/franadam/pen/Exjgoag"
            target="_blank" rel="noopener noreferrer">
            <img id="img-p7" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png" />
          </a>
        </div>

        <div className='project-title text-center d3'>
          <p>D3 Scatterplot Graph</p>
          <a href="https://codepen.io/franadam/pen/GRJqLEz"
            target="_blank" rel="noopener noreferrer">
            <img id="img-p8" className="img img--project" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png" />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Projects
