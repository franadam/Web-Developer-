import React from 'react'
import Skills from './Skills'
import Carousel from './Carousel'
import Contact from './Contact'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      idx: 0
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleFocus = this.handleFocus.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)
    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  render () {
    return (
      <div className='container' id='container'>
        <Skills />
        <Carousel />
        <Contact />
      </div>
    )
  }
}

export default Container
