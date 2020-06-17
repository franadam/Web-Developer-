const express =require('express');
const path = require('path');
const chalk = require('chalk');
const url = require('url');
const hbs = require('hbs');

const weatherstack = require('./utils/weatherstack');
const geocode = require('./utils/geocode');

const app = express();
const port = process.env.PORT || 3000;

// Define paths
const publiceDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup HBS
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory
app.use(express.static(publiceDirPath));

app.get('/',(req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Francisco'
  });
});

app.get('/help',(req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'How can I help you ?',
    name: 'Francisco'
  });
});

app.get('/about',(req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Francisco'
  });
});

app.get('/weather',async (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send('Please enter a valid location')
  };
  
  try {
    const {latitude,longitude,location} = await geocode(address,() => {});
    const {temperature, feelslike_temperature, weather_descriptions} = await weatherstack(longitude, latitude, location);
    console.log(latitude,longitude,location)
    return res.send({
      forcast: weather_descriptions,
      location,
      temperature,
      feelslike_temperature,
      address
    });
  } 
  catch(error) {
    if (error.response) {
      // Request made and server responded
      return res.send({error: error.response});
    } else if (error.request) {
      // The request was made but no response was received
      return res.send({error: error.request});
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(chalk.red.inverse('error'.toUpperCase()), chalk.red(error.message));
      return res.send({error: error.message, message: 'Please enter a valid address'});
    }
  }

  geocode(address,() => {})
    .then(response => {
      const {latitude,longitude,location} = response;
      return weatherstack(longitude, latitude, location);
    })
    .then(response => {
      const {location, temperature, feelslike_temperature, weather_descriptions} = response;
      return res.send({
        forcaste: weather_descriptions[0],
        location: location,
        temperature,
        feelslike_temperature,
        address
      });
    })
    .catch(e => {
      return res.send(e);
    })
  
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Francisco',
    message: 'Help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Francisco',
    message: 'Page not found'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});