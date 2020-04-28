import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import codewarsIcon from '@iconify/icons-simple-icons/codewars'

function Introduction () {
  return (

    <div className='intro about__description'>
      <h3 className='intro__header'>A few words</h3>
      <div className='intro__description'>
        <p className='intro__tagline'>
          I am François,<br /> a biomedical worker and hopefully a soon to be web developer.
        </p>

        <p>
        I possess a robust training in mathematics and programming.
        I have been learning frontend development for a few months on <a href='https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae'> FreeCodeCamp</a> and I have a keen interest in technical area to be able to create new technology.
        In addition to healthcare, ecology and energy have been a preoccupation of mine for a sometime now and that is the reason why as a student I worked in wastewater treatment plants and waste sorting plants for several years.
        </p>

        <p>
          You can find my work on my profiles :
        </p>
        <div className='intro__profile'>
          <a href='https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'free-code-camp']} /></a>
          <a href='https://codepen.io/franadam' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
          <a href='https://github.com/franadam/Web-Developer' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href='https://gitlab.com/franadam' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'gitlab']} /></a>
          <a href='https://www.codewars.com/users/kenneth30R' target="_blank" rel="noopener noreferrer"><Icon icon={codewarsIcon} /></a>
        </div>

      </div>
    </div>

  )
}

export default Introduction
