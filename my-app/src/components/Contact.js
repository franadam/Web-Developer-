import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact () {
  return (
    <div className='contact' id='contact'>
      <h2 className='contact__header'>Contact</h2>
      <div id='contact__info' className='contact__info' >
        <div className='info__header'>
          <h3>Have a question or want to work together?</h3>
          <p>Bla Bla</p>
        </div>
        <div className='info__mail'>
          <div>
            <div className='icon-container'>
              <FontAwesomeIcon icon={['fas', 'map-marked-alt']} size="2x" />
              <h3 style={{ textShadow: 'none', fontWeight: 'bold' }}>Address</h3>
            </div>
            <p className='text-start'>Charlemagne building <br/>
              Rue de la Loi 170 <br/>
              1040 Brussels <br/>
              Belgium</p>
          </div>
          <div>
            <div className='icon-container'>
              <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />
              <h3 style={{ textShadow: 'none', fontWeight: 'bold' }}>Phone</h3>
            </div>
            <p>00 800 67 89 10 11</p>
          </div>
        </div>
      </div>
      <div id='container-form' className='contact__container-form'>
        <h3 style={{ color: 'white' }}>Send us a message</h3>

        <form id='contact-form' className='contact-form'>
          <div className='contact-form__name'>
            <input type="text" id="name" name="name" placeholder="Name"/>
            <input type="email" id="mail" name="mail" placeholder="Mail"/>
          </div>
          <input type="text" id="subject" name="subject" placeholder="Subject"/>
          <textarea id="message" name="massage" placeholder="Message" style={{ height: '170px' }}></textarea>
          <button className='btn btn--form' type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
