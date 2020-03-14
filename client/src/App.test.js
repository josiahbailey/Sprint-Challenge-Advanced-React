import React from 'react';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('carlist is rendering', () => {
  const { getByTestId } = render(<App />)

  const list = getByTestId(/list/i)

  expect(list).toBeInTheDocument();
})