import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render board with hint', () => {
  const { getByText } = render(<App />);
  const hintElement = getByText("Here's your board");
  expect(hintElement).toBeInTheDocument();
});
