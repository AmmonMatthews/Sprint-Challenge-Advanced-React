import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Alex Morgan is displaying', () => {
  const {findByText} = render(<App />);
  findByText('Alex Morgan');
})

test('Tierna Davidson is displaying', () => {
  const {findByText} = render(<App />);
  findByText(/^tierna davidson$/i);
})


test('Header is showing', () => {
  const{getByTestId} = render(<App />);
  getByTestId(/header/i);
})