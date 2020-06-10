import React, { useEffect, useState } from 'react';

import './contextMenu.css';


const CONTEXT_MENU_ID = "context-menu"


export default function ContextMenu(props) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect((e) => {
    if (props.open) {
      e.preventDefault();
      console.log("OpenMenu!");
      setLeft(e.clientX);
      setTop(e.clientY);
      setOpen(true);
    } else {
      console.log("CloseMenu!");
      const x = e.clientX;
      const y = e.clientY;
      const rect = document.getElementById(CONTEXT_MENU_ID).getBoundingClientRect();
      if (!(x > rect.left && x < rect.right && y > rect.top && y < rect.bottom)) {
        setOpen(false);
      }
    }
  }, [props.open])

  return (
    <div className={"context-menu" + (props.open ? " context-menu-open" : "")} style={{top: top, left: left}} id={CONTEXT_MENU_ID}>
      {/* TODO: Add context agnostic list of items which are passed to component as children */}
    </div>
  );
}
