import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('get texts from page', () => {
  it('renders get your local weather', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/get your local weather/i);
    expect(linkElement).toBeInTheDocument();
  });
});
