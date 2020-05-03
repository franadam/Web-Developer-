import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills () {
  return (
    <div className='skills about__skills' id='skills'>
      <h3 className='skills__header'>Scripting and Programming Language <br /> Skills</h3>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--html">
          <span>HTML5</span>
        </div>
        <div className="bar__percent bar__percent--html">90%</div>
      </div>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--css">
          <span>CSS</span>
        </div>
        <div className="bar__percent bar__percent--css">80%</div>
      </div>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--js">
          <span>JavaScript</span>
        </div>
        <div className="bar__percent bar__percent--js">75%</div>
      </div>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--react">
          <span>React</span>
        </div>
        <div className="bar__percent bar__percent--react">70%</div>
      </div>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--d3">
          <span>D3</span>
        </div>
        <div className="bar__percent bar__percent--d3">60%</div>
      </div>

      <div className="skills__bar bar">
        <div className="bar__title bar__title--python">
          <span>Python</span>
        </div>
        <div className="bar__percent bar__percent--python">85%</div>
      </div>

    </div>
  )
}

export default Skills
