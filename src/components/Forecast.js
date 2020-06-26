import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forecast = () => {
  const [city, setCity] = useState('Cluj');
  const [forecast, setForecast] = useState({});

  const uriEncodedCity = encodeURIComponent(city);

  useEffect(() => {
    getForecast();
  }, []);

  const getForecast = (e) => {
    e && e.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${'abdb943263b01eb0dd719e4e97e2f705'}&units=metric`
      )
      .then((resp) => setForecast(resp.data));
  };
  return (
    <>
      <div className='text-center jumbotron'>
        <form>
          <input
            type='text'
            placeholder='Enter City'
            maxLength='50'
            value={city}
            className='text-center'
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={(e) => getForecast(e)}>Get Forecast</button>
        </form>
      </div>
      <h2 className='text-center'>
        {forecast && forecast.main && Math.round(forecast.main.temp)} degrees
        with {forecast && forecast.weather && forecast.weather[0].description}
      </h2>
    </>
  );
};

export default Forecast;
