import React, { Component } from 'react';
import About from './About';
import Works from './Works';
import Contact from './Contact';

class Container extends Component {
  state = {
    idx: 0,
  };

  render() {
    return (
      <div className="container" id="container">
        <About />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default Container;
