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
            <FontAwesomeIcon icon={['fas', 'map-marked-alt']} />
            <h3>Address</h3>
            <p className='text-start'>Charlemagne building <br/>
              Rue de la Loi 170 <br/>
              1040 Brussels <br/>
              Belgium</p>
          </div>
          <div>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <h3>Phone</h3>
            <p>00 800 67 89 10 11</p>
          </div>
        </div>
      </div>
      <div id='container-form' className='contact__container-form'>
        <h3>Send us a message</h3>

        <form id='contact-form' className='contact-form'>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
            <option value="belgium">Belgium</option>
            <option value="netherlands">Netherlands</option>
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '170px' }}></textarea>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    </div>
  )
}

export default Contact
