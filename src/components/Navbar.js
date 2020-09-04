import React from 'react';
import colorsStyle from '../scss/utils/_colors.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.Scrolling = this.Scrolling.bind(this);
  }

  Scrolling() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const navbar = document.getElementById('navbar');
      const height = window.innerHeight - 50;
      const color1 = colorsStyle.secondary_color_base;
      const color2 = colorsStyle.secondary_color_dark;
      console.log(color1);
      if (
        document.body.scrollTop >= height ||
        document.documentElement.scrollTop >= height
      ) {
        navbar.style.boxShadow = '1px 1px 10px 0 ' + color2;
        navbar.style.backgroundColor = color1;
      } else {
        navbar.style.boxShadow = 'none';
        if (window.innerWidth > 500) {
          navbar.style.backgroundColor = 'transparent';
        } else {
          navbar.style.backgroundColor = color1;
        }
      }
    }
  }

  componentDidMount() {
    var that = this;
    that.Scrolling();
  }

  render() {
    return (
      <div className="navbar" id="navbar">
        <a className="navbar__link" href="#contact">
          Contact
        </a>
        <a className="navbar__link" href="#works">
          Work
        </a>
        <a className="navbar__link" href="#about">
          About
        </a>
        <a className="navbar__link" href="#header">
          Home
        </a>
      </div>
    );
  }
}

export default Navbar;
