import React, { useEffect, useState } from 'react';

import './contextMenu.css';


const CONTEXT_MENU_ID = "context-menu";


export default function ContextMenu(props) {
  const width = 150;

  return (
    <div className={props.open ? "context-menu-open" : ""} style={{top: props.top, left: props.left, width: width}} id={CONTEXT_MENU_ID}>
      <ul className="context-menu-list">
        {props.options.map(([item, callback]) => (
          <li key={item} className="context-menu-list-item" onClick={callback}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
