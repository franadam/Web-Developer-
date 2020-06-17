console.log('client side js');

const fetchData = async (searchQuery) => {
  let result;
  try {
    const resultJSON = await fetch(`/weather?address=${searchQuery}`);
    result = await resultJSON.json();
    
  } catch (error) {
    console.log('forcaste');
    if (error.response) {
      // Request made and server responded
      console.log({error: error.response});
    } else if (error.request) {
      // The request was made but no response was received
      console.log({error: error.request});
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log({error: error.message, message: 'Please enter a valid address'});
    }
    result = error;
  }

  const {location, forcast, error} = result
  console.log(location)
  console.log(forcast)
  console.log(error)
  return result;
};


const weatherForm = document.querySelector('form');
const search = document.querySelector('input').value;
const messageDOM = document.querySelector('.message');
const locationDOM = document.querySelector('#location');
const forcastDOM = document.querySelector('#forcast');
const errorDOM = document.querySelector('#error');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (search) {
    locationDOM.textContent = `Loading...`;
    forcastDOM.textContent = ``;
    fetchData(search.trim())
    .then(res => {
      const {location, forcast, error} = res
      if (location && forcast) {
        locationDOM.textContent = `Location: ${location}`;
        forcastDOM.textContent = `Forcast: ${forcast}`;
      }
      else {
      locationDOM.textContent = ``;
      errorDOM.textContent = `${error}`;}
    });
  }
  else {
      errorDOM.textContent = `Please enter a valid location`;
      console.log('Please enter a valid location');
  }
  console.log('testing', search)
});