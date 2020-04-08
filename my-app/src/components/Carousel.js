import React from 'react'

function currentSlide (props, i) {
  this.setState({
    href: props.slides[i].href,
    src: props.slides[i].src
  })
  var dots = document.getElementsByClassName('dot')
  props.active(dots, i)
}

function Carousel (props) {
  return (

    <div className='carousel' id='carousel'>

      <h2>These are some of my projects </h2>

      <div className="carousel__caption-number">{(props.idx + 1)}</div>

      <div id='mg-container' className='carousel__img-container'>

        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img id={'img-p' + props.idx} className='img-carousel' src={props.src}/>
        </a>

        <div className='carousel__navigation-container'>

          <a id='backward' className='navigation-button' onClick={props.backward}> &#10094;</a>
          <a id='play' className='navigation-button' onClick={props.play}> ► ■</a>
          <a id='forward' className='navigation-button' onClick={props.forward}> &#10095;</a>

        </div>

        <div className="carousel__caption-text">Caption Text</div>

        <div id = 'bullet'>
        </div>

      </div>

    </div>

  )
}

export default Carousel
