import React from 'react'
var INTER = 4000

const imagesRef = [
  { href: 'https://codepen.io/franadam/full/qBBwRKZ', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png' }, { href: 'https://codepen.io/franadam/full/GRJqLEz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png' }, { href: 'https://codepen.io/franadam/full/Exjgoag', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png' }, { href: 'https://codepen.io/franadam/full/eYmMeJd', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png' }, { href: 'https://codepen.io/franadam/full/WNbJvQz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png' }, { href: 'https://codepen.io/franadam/full/WNNmqoy', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png' }, { href: 'https://codepen.io/franadam/full/BaabPJx', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png' }]

function SlideItem (props) {
  return (

    <div className='carousel' id='carousel' tabIndex="0">

      <h1>These are some of my projects </h1>

      <div className='project-tile text-center'>
        <h2>{props.title}</h2>
        <div className="carousel__caption-number text-center">{(props.currentSlide + 1)}/{imagesRef.length}</div>

        <a href={props.slide.href} target="_blank" rel="noopener noreferrer">
          <img id={'img-p' + props.currentSlide} alt={'slide-' + props.currentSlide} className='img-carousel' src={props.slide.src}/>
        </a>

        <div className='carousel__navigation-container'>

          <a id='backward' className='navbutt navbutt--backward' onClick={props.backward}></a>
          <a id='play' className='navbutt navbutt--play in-action' onClick={props.rolling}></a>
          <a id='forward' className='navbutt navbutt--forward' onClick={props.forward}></a>

        </div>

      </div>

      <div id = 'bullet' className="caption text-center">
        {imagesRef.map((e, index) =>
          <span
            key={index}
            id ={'bull' + index}
            className={props.currentSlide === index ? 'dot active' : 'dot'}
            onClick={() => props.changeSlide(index)}
          />)}
      </div>

      <div className="carousel__caption-text text-center">Caption Text</div>

    </div>
  )
}

function OneSlide () {
  return (

    <div className='project-tile text-center'>
      <p>D3 Bar Chart</p>
      <a href="https://codepen.io/franadam/pen/Exjgoag"
        target="_blank">
        <img id="img-p7" className="project-image" src="https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png"/>
      </a>
    </div>

  )
}

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideshow: props.slide,
      slideIndex: 0
    }
    this.currentIndex = 0
    this.pause = false
    this.rolling = this.rolling.bind(this)
    this.auto = this.auto.bind(this)
    this.changeSlide = this.changeSlide.bind(this)
    this.backward = this.backward.bind(this)
    this.forward = this.forward.bind(this)
    this.handleKeys = this.handleKeys.bind(this)
    this.plays = this.play.bind(this)
  }

  componentDidMount () {
    var that = this
    var carousel = document.getElementById('carousel')
    carousel.onFocus = that.handleKeys()
    if (this.pause === true) {
      clearInterval(this.timeout)
    } else {
      this.timeout = setTimeout(function () {
        that.auto()
      }, INTER)
    }
  }

  componentDidUpdate () {
    var that = this
    if (this.pause === true) {
      clearInterval(this.timeout)
    } else {
      this.timeout = setTimeout(function () {
        that.auto()
      }, INTER)
    }
  }

  componentWillUnmount () {
    clearInterval(this.timeout)
  }

  play () {
    var play = document.getElementById('play')
    const btn = 'navbutt navbutt--play'
    this.pause === false ? play.className = btn + ' in-action' : play.className = btn + ' on-breack'
  }

  rolling () {
    this.pause = !this.pause
    this.play()
    this.auto()
  }

  auto () {
    const index = this.currentIndex
    console.log('slideIndex: ', index)
    this.currentIndex = index >= imagesRef.length - 1 ? 0 : index + 1
    console.log('pause:', this.pause)
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    })
  }

  changeSlide (index, event) {
    this.currentIndex = index
    console.log('pause:', this.pause)
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    })
  }

  backward () {
    const index = this.currentIndex - 1
    this.currentIndex = index < 0 ? imagesRef.length - 1 : index
    this.pause = true
    this.play()
    console.log('pause:', this.pause)
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    })
  };

  forward () {
    const index = this.currentIndex + 1
    this.currentIndex = index >= imagesRef.length ? 0 : index
    this.pause = true
    this.play()
    console.log('pause:', this.pause)
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    })
  };

  handleKeys () {
    var that = this
    document.addEventListener('keydown', function (e) {
      switch (e.which) {
        case 32: // space
          that.rolling()
          break

        case 37: // left
          that.backward()
          break

        case 38: // up
          that.forward()
          break

        case 39: // right
          that.forward()
          break

        case 40: // down
          that.backward()
          break

        default: return
      }
      e.preventDefault()
    }
    )
  }

  render () {
    return (
      <div className="slideshow-simple">
        <SlideItem
          title={this.state.slideshow.href}
          slide={this.state.slideshow}
          currentSlide={this.state.slideIndex}
          auto={this.auto}
          rolling={this.rolling}
          backward={this.backward}
          forward={this.forward}
          changeSlide={this.changeSlide}
          handleKeys={this.handleKeys}
        />
      </div>
    )
  }
}

export default Carousel
