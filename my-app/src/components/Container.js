import React from 'react'
import Carousel from './Carousel'

const imagesRef = [
  { href: 'https://codepen.io/franadam/full/qBBwRKZ', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png' }, { href: 'https://codepen.io/franadam/full/GRJqLEz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png' }, { href: 'https://codepen.io/franadam/full/Exjgoag', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png' }, { href: 'https://codepen.io/franadam/full/eYmMeJd', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png' }, { href: 'https://codepen.io/franadam/full/WNbJvQz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png' }, { href: 'https://codepen.io/franadam/full/WNNmqoy', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png' }, { href: 'https://codepen.io/franadam/full/BaabPJx', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png' }]

function active (elems, idx) {
  for (var i = 0; i < elems.length; i++) {
    elems[i].className = elems[i].className.replace(' active', '')
  }
  elems[idx].className += ' active'
}

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slides: imagesRef,
      href: imagesRef[0].href,
      src: imagesRef[0].src,
      idx: 0
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleFocus = this.handleFocus.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)
    // this.handleKeyUp = this.handleKeyUp.bind(this)
    this.backward = this.backward.bind(this)
    this.forward = this.forward.bind(this)
    this.play = this.play.bind(this)
  }

  backward (state) {
    if (state.idx > 0) {
      this.setState({
        idx: state.idx -= 1
      })
    }
    this.setState({
      href: imagesRef[state.idx].href,
      src: imagesRef[state.idx].src
    })
    var dots = document.getElementsByClassName('dot')
    active(dots, state.idx)
  };

  forward (state) {
    if (this.state.idx < imagesRef.length - 1) {
      this.setState({
        idx: state.idx -= 1
      })
    }
    this.setState({
      href: imagesRef[state.idx].href,
      src: imagesRef[state.idx].src
    })
    var dots = document.getElementsByClassName('dot')
    active(dots, state.idx)
  };

  play (state) {
    var i = 0
    for (i; i < imagesRef.length; i++) {
      this.setState({
        idx: state.idx += 1,
        href: imagesRef[state.idx].href,
        src: imagesRef[state.idx].src
      })
    }
    var dots = document.getElementsByClassName('dot')
    active(dots, state.idx)
  };

  render () {
    return (
      <div className='container'>
        <Carousel
          backward={this.backward}
          play={this.play}
          forward={this.forward}
          active={active}
          slides={this.imagesRef}
          idx={this.state.idx}
          href={this.state.href}
          src={this.state.src}
        />
      </div>
    )
  }
}

export default Container
