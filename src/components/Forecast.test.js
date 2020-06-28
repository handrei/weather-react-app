import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

import Forecast from './Forecast';

describe('get texts from page', () => {
  it('renders get your local weather', () => {
    const { getByText } = render(<Forecast />);
    const linkElement = getByText(/Get Forecast/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('get data from weather api', () => {
  it('should load data ', async () => {
    let city;
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Cluj&appid=${'abdb943263b01eb0dd719e4e97e2f705'}&units=metric`
      )
      .then((res) => (city = res.data.name));
    expect(city).toEqual('Cluj');
  });
});
