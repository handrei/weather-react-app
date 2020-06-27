import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Forecast.css';

const Forecast = () => {
  const [city, setCity] = useState('Cluj');
  const [forecast, setForecast] = useState({});
  const [error, setError] = useState('');

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
      .then((resp) => setForecast(resp.data))
      .catch((err) => setError(err.response.data.message));
    setError('');
  };
  return (
    <>
      <div className='text-center'>
        <form>
          <div className='wrapper text-center'>
            <input
              type='text'
              placeholder='Enter City'
              maxLength='50'
              value={city}
              className='text-center border input-group-lg'
              onChange={(e) => setCity(e.target.value)}
            />
            {error && <div className='error'>{error}</div>}
            <button
              onClick={(e) => getForecast(e)}
              className='btn btn-dark mt-2 border'
            >
              Get Forecast
            </button>
          </div>
        </form>
      </div>
      {!error && (
        <h2 className='text-center mt-4'>
          {forecast && forecast.main && Math.round(forecast.main.temp)} &#8451;
          degrees with{' '}
          {forecast && forecast.weather && forecast.weather[0].description}
        </h2>
      )}
    </>
  );
};

export default Forecast;
