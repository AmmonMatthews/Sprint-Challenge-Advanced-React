import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';

test('renders without crashing', () => {
  render(<App />);
});

test('Alex Morgan is displaying', () => {
  const {findByText} = render(<Display/>);
  findByText('Alex Morgan');
})

test('Tierna Davidson is displaying', () => {
  const {findByText} = render(<Display />);
  findByText(/^tierna davidson$/i);
})


test('Header is showing', () => {
  const{getByTestId} = render(<App />);
  getByTestId(/header/i);
})