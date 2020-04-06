import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header () {
  return (
    <header id='welcome-section' className='header'>
      <h1 id ='title' className='header__title serif uppercase'> Francois </h1>
      <p className='comic'> A web developer </p>
      <div className='header__link'>
        <a id='freecodecamp-link' href='https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'free-code-camp']} /></a>
        <a id='codepen-link' href='https://codepen.io/franadam' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
        <a id='github-link' href='https://github.com/franadam/Web-Developer' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      </div>
    </header >
  )
}

export default Header
