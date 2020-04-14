import React from 'react'
import Carousel from './Carousel'
import Projects from './Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Works () {
  return (
    <div className='works' id='works'>
      <h2>Works</h2>
      <Carousel />
      <Projects />
    </div>
  )
}

export default Works
