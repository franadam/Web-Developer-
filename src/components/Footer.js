import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import codewarsIcon from '@iconify/icons-simple-icons/codewars'

function Footer () {
  return (
    <div id='footer' className='footer'>
      <div className='footer__header'>
        Au revoir !
      </div>
      <ul className='footer__profile'>
        <li><a className='col-33' id='freecodecamp-link' href='https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'free-code-camp']} /> FreeCodeCamp</a></li>
        <li><a className='col-33' id='codepen-link' href='https://codepen.io/franadam' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /> CodePen</a></li>
        <li><a className='col-33' id='github-link' href='https://github.com/franadam/Web-Developer' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</a></li>
        <li><a className='col-33' id='gitlab-link' href='https://gitlab.com/franadam' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'gitlab']} /> GitLab</a></li>
        <li><a className='col-33' id='codewars-link' href='https://www.codewars.com/users/kenneth30R' target="_blank" rel="noopener noreferrer"><Icon icon={codewarsIcon} /> Codewars</a></li>
      </ul>
      <div className='footer__contact'>

        <div>
          <FontAwesomeIcon icon={['fas', 'map-marked-alt']} size="lg" />
          <p>Address</p>
          <p>
              Rue de la Loi 170 <br/>
              1040 Brussels Belgium</p>
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'phone']} size="lg" />
          <p>Phone</p>
          <p>00 800 67 89 10 11</p>
        </div>

      </div>
      <div className='footer__legal'>
      © 2020 BeMyself - BeMe. All Rights Reserved. Unicorn group
      </div>
    </div>
  )
}

export default Footer
