import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact () {
  return (
    <div className='contact' id='contact'>
      <h2 className='contact__header'>Contact</h2>
      <div className='contact__info info' >
        <div>
          <h3>Have a question or want to work together?</h3>
          <p className='info__header'>Let's be real, these contact information are not mine. Maybe you recognize the address.
            Do not worry I will provide the real ones if we meet !
          </p>
        </div>
        <div className='info__icon'>
          <div>
            <FontAwesomeIcon className='icon__img' icon={['fas', 'map-marked-alt']} />
            <h3 className='icon__header'>Address</h3>
            <p >Charlemagne building <br/>
              Rue de la Loi 170 <br/>
              1040 Brussels <br/>
              Belgium</p>
          </div>
          <div>
            <FontAwesomeIcon className='icon__img' icon={['fas', 'phone']} />
            <h3 className='icon__header'>Phone</h3>
            <p>00 800 67 89 10 11</p>
          </div>
        </div>
      </div>
      <div className='contact__form form'>
        <h3 className='form__header'>Send us a message</h3>

        <form id='contact-form' className='form__container contact-form'>
          <div className='contact-form__name'>
            <input type="text" id="name" name="name" placeholder="Name"/>
            <input type="email" id="mail" name="mail" placeholder="Mail"/>
          </div>
          <input type="text" id="subject" name="subject" placeholder="Subject"/>
          <textarea id="message" name="massage" placeholder="Message"></textarea>
          <button className='btn btn--form' type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
