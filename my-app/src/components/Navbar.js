import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar () {
  return (

      <div className='navbar' id='navbar'>
        <a href="#welcome-section"><FontAwesomeIcon icon={['fab', 'apple']} /> About</a>
        <a href='#main'><FontAwesomeIcon icon={['fab', 'apple']} /> Work</a>
        <a href='#contact'><FontAwesomeIcon icon={['fab', 'apple']} /> Contact</a>
      </div>

  )
}

export default Navbar
