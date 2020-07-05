import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MainMenu } from './main_menu';

test('Render main menu', () => {
  const {getByText} = render(<MainMenu/>,);

  const menuHeader = getByText('Menu');
  const openToggler = getByText('→');
  const closeToggler = getByText('←');

  expect(menuHeader).toBeInTheDocument();
  expect(openToggler).toBeInTheDocument();
  expect(closeToggler).toBeInTheDocument();

  fireEvent.click(openToggler);
  fireEvent.click(closeToggler);

  // TODO: Add interactivity tests for toggling main menu
});
