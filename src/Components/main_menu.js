import React, { useState } from 'react';

import './main_menu.css'


export default function Menu() {
  const [open, setOpen] = useState(true);
  const menuItems = ['Fonts', 'Preferences', 'Account'];

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <div className='menu-toggler menu-open-toggler' onClick={openMenu}>&rarr;</div>
      <div className={'main-menu' + (open ? ' main-menu-open' : '')}>
        <div className='menu-toggler menu-close-toggler' onClick={closeMenu}>&larr;</div>
        <h3 className='menu-header'>Menu</h3>
        <ul className='menu-list'>
          {menuItems.map((item) => (
            <li className='menu-item' key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
