import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills () {
  return (
    <div className='skills' id='skills'>
      <h2 style={{ justifySelf: 'center' }}>Skills</h2>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>HTML5</span>
        </div>
        <div className="skillbar__percent html">90%</div>
      </div>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>CSS</span>
        </div>
        <div className="skillbar__percent css">80%</div>
      </div>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>JavaScript</span>
        </div>
        <div className="skillbar__percent js">75%</div>
      </div>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>PHP</span>
        </div>
        <div className="skillbar__percent php">50%</div>
      </div>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>React</span>
        </div>
        <div className="skillbar__percent react">70%</div>
      </div>

      <div className="skillbar">
        <div className="skillbar__title">
          <span>D3</span>
        </div>
        <div className="skillbar__percent d3">60%</div>
      </div>

    </div>
  )
}

export default Skills
