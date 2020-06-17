//const request = require('request');
const chalk = require('chalk');
const axios = require('axios');

const weatherstack = async (latitude, longitude, location) => {
  const key = 'eefc4b07497227afb64d0a167c7dac61';
  const unit = 'm'
  const params = `?access_key=${key}&query=${latitude},${longitude}&units=${unit}`;
  const url = `http://api.weatherstack.com/current${params}`;
/* 
  request({url, json: true}, (error, response) => {
    try {
      callback(undefined, response);
    }
    catch (e) {
      if (error) {
        callback(error, undefined)
      } else {
        callback(e, undefined)
      }
    }
  }); */
  
    const res = await axios.get(url);
    const data = res.data.current;
    //console.log(`${location}: ${data.weather_descriptions}. It is currently ${data.temperature} but it feels like ${data.feelslike}!`);
    return {
      location,
      temperature: data.temperature,
      feelslike_temperature: data.feelslike,
      weather_descriptions: `${data.weather_descriptions}. It is currently ${data.temperature} but it feels like ${data.feelslike}!`
    }
  
};

const fetchWeatherstack = (error, data) => {
  console.log('fetchWeatherstack');
  if (data) {
    const response = data.body.current; //JSON.parse(response.body);
    console.log(`${response.weather_descriptions}. It is currently ${response.temperature} but it feels like ${response.feelslike}!`);
  } 
  else {
    console.log(chalk.red(error));
  }
};

module.exports = weatherstack;

//weatherstack(-73.9808, 40.7648);