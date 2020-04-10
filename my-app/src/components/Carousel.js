import React from 'react'
var INTER = 4000;
  
  const imagesRef = [
    { href: 'https://codepen.io/franadam/full/qBBwRKZ', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png' }, { href: 'https://codepen.io/franadam/full/GRJqLEz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png' }, { href: 'https://codepen.io/franadam/full/Exjgoag', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png' }, { href: 'https://codepen.io/franadam/full/eYmMeJd', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png' }, { href: 'https://codepen.io/franadam/full/WNbJvQz', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png' }, { href: 'https://codepen.io/franadam/full/WNNmqoy', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png' }, { href: 'https://codepen.io/franadam/full/BaabPJx', src: 'https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png' }]
       
  function SlideItem(props) {
    return (
        
    <div className='carousel' id='carousel'>
          
          <h1>These are some of my projects </h1>
        <h2>{props.title}</h2>
        <div className="carousel__caption-number text-center">{(props.currentSlide + 1)}/{imagesRef.length}</div>
        
        <a href={props.slide.href} target="_blank" rel="noopener noreferrer">
        <img id={'img-p' + props.currentSlide} className='img-carousel' src={props.slide.src}/>
        </a>
        

        <div className='carousel__navigation-container'>

          <a id='backward' className='navbutt navbutt--backward' onClick={props.backward}></a>
          <a id='play' className='navbutt navbutt--play in-action' onClick={props.rolling}></a>
          <a id='forward' className='navbutt navbutt--forward' onClick={props.forward}></a>

        </div>
        
        <div id = 'bullet' className="caption text-center">
            {imagesRef.map((e,index) => 
            <span 
            key={index} 
            id ={'bull'+index} 
            className={props.currentSlide === index ? 'dot active' : 'dot'} 
            onClick={() => props.changeSlide(index)}
            />)}  
        </div>
        
        <div className="carousel__caption-text text-center">Caption Text</div>
        
      </div>
    );
  }
  
  class Carousel extends React.Component {
    constructor(props) {
       super(props);
      this.state = {         
           slideshow: props.slide,         
           slideIndex: 0
      };
      this.currentIndex = 0;
      this.pause = false;
    }
    
    componentDidMount(){        
        var that = this;
        if(this.pause === true) {
            clearInterval(this.timeout);
      }         
      else{
          this.timeout = setTimeout(function () {
          that.auto()
        }, INTER);
    }
}

    componentDidUpdate() {
        var that = this;
        if(this.pause === true) {
            clearInterval(this.timeout);
      }         
      else{
          this.timeout = setTimeout(function () {
          that.auto()
        }, INTER);
      }
    }
      
    componentWillUnmount() {
      clearInterval(this.timeout);
    }
        
    rolling = () => {
        this.pause = !this.pause;
        var play = document.getElementById('play');
        let btn = 'navbutt navbutt--play';
        this.pause === false ? play.className = btn + ' in-action' : play.className = btn + ' on-breack';
        this.auto();
    }
    
    auto = () => {
        let index = this.currentIndex;
        console.log('slideIndex: ', index);
        this.currentIndex = index >= imagesRef.length -1 ? 0 : index + 1;
        console.log('pause:', this.pause);
         this.setState({
           slideIndex: this.currentIndex,
           slideshow: imagesRef[this.currentIndex]
         });
    }
    
    changeSlide = (index) => {
        this.currentIndex = index ;
        console.log('pause:', this.pause);
         this.setState({
           slideIndex: this.currentIndex,
           slideshow: imagesRef[this.currentIndex]
         });
    }

  backward = () => {
    let index = this.currentIndex - 1;
    this.currentIndex = index < 0 ? imagesRef.length - 1 : index;
    this.pause = true;
    console.log('pause:', this.pause);
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    });
  };

  forward = () => {
    let index = this.currentIndex + 1;
    this.currentIndex = index >= imagesRef.length ? 0 : index;
    this.pause = true;
    console.log('pause:', this.pause);
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: imagesRef[this.currentIndex]
    });
  };

    render() {    
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
          />      
        </div>
      );
    }    
  }

  export default Carousel
