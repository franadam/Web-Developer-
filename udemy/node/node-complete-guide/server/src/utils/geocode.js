const chalk = require('chalk');
const axios = require('axios');

const geocode = (address, callback) => {
  const key = 'pk.eyJ1IjoiZnJhbmFkYW0iLCJhIjoiY2tiaDE1dTlqMDB4ZjJ4cXFuMHYycHdjdyJ9.s2FR-DKrkBuE2hRKu6uZtw';
  const location = encodeURIComponent(address);
  const limit = '1'
  const params = `?access_token=${key}&limit=${limit}`;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json${params}`;

/*
  request({url, json: true}, (error, {body}) => {
    try {
      const data = body.features[0];
      const [longitude, latitude] = data.center;
      callback(undefined, {
        latitude,
        longitude,
        location: data.place_name
      });
    }
    catch (e) {
      if (error) {
        callback(error, undefined)
      } else {
        callback(e, undefined)
      }
    }
  });
*/
  return axios.get(url)
    .then(res => {
      const data = res.data.features[0];
      const [longitude, latitude] = data.center;
      //console.log(longitude, latitude)
      return {
        latitude,
        longitude,
        location: data.place_name
      }
    })
};

const fetchGeocode = (error, data) => {
  console.log('fetchGeocode')
  if (data) {
    const {
      latitude,
      longitude,
      location
    } = data;
    console.log(`${location}. It is currently longitude: ${longitude}, latitude ${latitude} but it feels like!`);
  } else {
    console.log(chalk.red(error))
  }
};

module.exports = geocode;

//geocode('New York', fetchGeocode);