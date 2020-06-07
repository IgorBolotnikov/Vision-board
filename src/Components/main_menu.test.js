import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './main_menu';

test('Render main menu', () => {
  const { getByText } = render(<Menu />);
  const parser = new DOMParser;

  const menuHeader = getByText("Menu");
  const openToggler = getByText("→");
  const closeToggler = getByText("←");

  expect(menuHeader).toBeInTheDocument();
  expect(openToggler).toBeInTheDocument();
  expect(closeToggler).toBeInTheDocument();

  fireEvent.click(openToggler);
  fireEvent.click(closeToggler);

  // TODO: Add interactivity tests for toggling main menu
});
