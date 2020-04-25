import React from 'react'
var INTER = 4000

const imagesRef = [
  { title: 'Chart', description: 'This bar chart uses D3 to plot US GDP through the years.', href: 'https://codepen.io/franadam/full/GRJqLEz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png' },
  { title: 'Random Quote Machine', description: 'The goals of this project is to be able to fetch random quote from a public api and display them on our page.', href: 'https://codepen.io/franadam/full/eYmMeJd', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png' },
  { title: 'Dashboard', description: 'The goal of this project is to create a dashboard with which the user can manage his account. In this scenario, the form used to modify the user profile information has to be created. The form contains two tabs, as specified below and shown in the picture.', href: 'https://eloquent-aryabhata-f6b832.netlify.app', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FUser%20Dashboard.png' }]

function SlideItem (props) {
  return (

    <div className='slide-item carousel__item' id='slide-item' tabIndex="0">

      <div className='slide-item__img-container'>

        <div className="slide-item__caption-number">{(props.currentSlide + 1)}/{imagesRef.length}</div>

        <a href={props.slide.href} target="_blank" rel="noopener noreferrer">
          <img id={'img-c' + props.currentSlide} alt={'slide-' + props.currentSlide} className='img img--carousel' src={props.slide.src}/>
        </a>

        <p className="slide-item__caption-text">{props.slide.title}</p>

        <div className='slide-item__navigation-container'>

          <a id='backward' className='navbutt navbutt--backward' onClick={props.backward}></a>
          <a id='play' className='navbutt navbutt--play navbutt--in-action' onClick={props.rolling}></a>
          <a id='forward' className='navbutt navbutt--forward' onClick={props.forward}></a>

        </div>

      </div>

      <div id = 'bullet' className="caption text-center">
        {imagesRef.map((e, index) =>
          <span
            key={index}
            id ={'bull' + index}
            className={props.currentSlide === index ? 'dot dot--active' : 'dot'}
            onClick={() => props.changeSlide(index)}
          />)}
      </div>

    </div>
  )
}

function SlideDescription (props) {
  return (

    <div className='slide-description carousel__description' id='description'>
      <h3 className="slide-description__header">{props.slide.title}</h3>
      <p className='slide-description__text'>{props.slide.description}</p>
    </div>

  )
}

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideshow: imagesRef[0],
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
    var carousel = document.getElementById('slide-item')
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
    this.pause === false ? play.className = btn + ' navbutt--in-action' : play.className = btn + ' navbutt--on-breack'
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
        case 40: // down
          that.backward()
          break

        case 38: // up
        case 39: // right
          that.forward()
          break

        default: return
      }
      e.preventDefault()
    }
    )
  }

  render () {
    return (
      <div className='carousel works__carousel'>
        <h3 className='carousel__header'>These are some of my projects </h3>

        <SlideDescription
          slide={this.state.slideshow}
          currentSlide={this.state.slideIndex}
          changeSlide={this.changeSlide}
          handleKeys={this.handleKeys}
        />

        <SlideItem
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
