import React, { useEffect, useState } from 'react';

import './context_menu.css';


const CONTEXT_MENU_ID = "context-menu";

interface Props {
  open: boolean,
  top: number,
  left: number,
  options: [string, () => void][]
}


export function ContextMenu(props: Props) {
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
