import React from 'react'
import Carousel from './Carousel'

const imagesRef = [
  { href: 'https://codepen.io/franadam/full/qBBwRKZ', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png' }, { href: 'https://codepen.io/franadam/full/GRJqLEz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png' }, { href: 'https://codepen.io/franadam/full/Exjgoag', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png' }, { href: 'https://codepen.io/franadam/full/eYmMeJd', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png' }, { href: 'https://codepen.io/franadam/full/WNbJvQz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png' }, { href: 'https://codepen.io/franadam/full/WNNmqoy', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png' }, { href: 'https://codepen.io/franadam/full/BaabPJx', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png' }]

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
      <div className='container'>
        <Carousel
          slide={imagesRef[0]}/>
      </div>
    )
  }
}

export default Container
