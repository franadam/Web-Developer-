import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state={
    degree: 0,
    position: '',

  }

  componentDidMount = () => {
    this.getLocation();
    console.log(this.state.location);
  };

  fetchWeather = () => {
    axios.get('https://fcc-weather-api.glitch.me/api/current', 
   {params: {lon: this.state.location.longitude, lat: this.state.location.latitude}})
    .then(response => {
      console.log(response);
      this.setState({degree: response.data.main.temp})
    })
    .catch(error => {
      console.log(error);
    });
  };

  getLocation = () => {
    const location = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
        console.log(location);
        this.setState({location: location})
      });
    } else { 
      location.error = "Geolocation is not supported by this browser.";
    }
  }

  render () {
    return (
      <div className="App">
      <h1>Free Code Camp Weather App</h1>
      <button onClick={this.fetchWeather} > location</button>
      <h2>{this.state.degree}</h2>
      </div>
    );
  }
}

export default App;
