import React from 'react'
import Introduction from './Introduction'
import Carousel from './Carousel'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      idx: 0,
      rolling: true
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
        <h2 style={{ gridArea: 'title' }}>These are some of my projects </h2>
        <Introduction />
        <Carousel />
      </div>
    )
  }
}

export default Container
