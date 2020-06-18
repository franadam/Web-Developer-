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
          I have been learning web development for a few months on <a href='https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae'> FreeCodeCamp</a>.
          I possess a robust training in mathematics and programming (in other languages, like Python and Java).
          In addition to healthcare, ecology and renewable energy have been a preoccupation of mine for a sometime now and that is the reason why as a student I worked in wastewater treatment plants and waste sorting plants for several years.
        </p>

        <p>
          I see myself in a position as a front-end developer or full-stack developer before the end of the year. Ideally, I would like to move to a big European city like London – I know technically it is not the case anymore. Anyway, eing accepted to Founders And Coders would help me to advance this goal.
        </p>

        <p>
        I like the concept of being given an opportunity like yours, by a community, and be able to make a positive impact in that same community by mentoring the next cohort.
          I have been giving individual Sciences and Maths class to high school students for months and throughout my studies,
          I was part of an international student association, the main activity was to organize national engineering competition and European course,
          so I am used to team working and I developed a good team work ethics with people from different backgrounds.
        </p>

        <p>
        All this scientific and technical luggages make that I could suit in your program. You can find my work on my profiles :
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
