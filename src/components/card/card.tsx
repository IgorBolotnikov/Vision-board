import React, { useState } from 'react';
import { ICard } from '../../interfaces';

import './card.scss';

export const CARD_SIZE_LIMITS = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 500,
  maxHeight: 500,
};
export const DEFAULT_CARD_SIZE = {
  width: 100,
  height: 100,
};
export const DEFAULT_CARD_LOCATION = {
  left: window.innerWidth / 2 - DEFAULT_CARD_SIZE.width,
  top: window.innerHeight / 2 - DEFAULT_CARD_SIZE.height,
};

interface CardProps extends ICard {
  // delete(): void,
}

export const Card: React.FC<CardProps> = props => {
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [prevCursor, setPrevCursor] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown(event: React.MouseEvent) {
    setPrevCursor({x: event.clientX, y: event.clientY});
    setIsDragging(true);
  }

  function handleMouseMove(event: React.MouseEvent) {
    const newX = prevCursor.x - event.clientX;
    const newY = prevCursor.y - event.clientY;
    if (isDragging) {
      setLeft(left => left - newX);
      setTop(top => top - newY);
      setPrevCursor({x: event.clientX, y: event.clientY});
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  return (
    <div
      className="card-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{width: width, height: height, left: left, top: top}}
    >
      <h3 className="card-hint">Empty card</h3>
    </div>
  );
};
