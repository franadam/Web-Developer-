import React from 'react'
import Skills from './Skills'
import Introduction from './Introduction'

function About () {
  return (

    <div className='about' id='about'>
      <h2 className="about__header">About me</h2>
      <Introduction/>
      <Skills />
    </div>

  )
}

export default About
