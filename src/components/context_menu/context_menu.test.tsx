import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContextMenu } from './context_menu';


test('Render open context menu', () => {
  const callback = jest.fn();
  const menuItems = [['item', callback], ['other item', callback]];
  const { container, getByText } = render(<ContextMenu options={menuItems} top={10} left={10} open={true} />);
  expect(container.firstChild.classList.contains('context-menu-open')).toBe(true);

  const item = getByText(menuItems[0][0]);
  expect(item).toBeInTheDocument();

  const otherItem = getByText(menuItems[1][0]);
  expect(otherItem).toBeInTheDocument();

  fireEvent.click(item);
  expect(callback).toHaveBeenCalledTimes(1);
  fireEvent.click(otherItem);
  expect(callback).toHaveBeenCalledTimes(2);
});

test('Render closed context menu', () => {
  const callback = jest.fn();
  const menuItems = [['item', callback], ['other item', callback]];
  const { container, getByText } = render(<ContextMenu options={menuItems} top={10} left={10} open={false}/>);
  expect(container.firstChild.classList.contains('context-menu-item')).toBe(false);
})
