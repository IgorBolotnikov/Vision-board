import React, { useState } from 'react';
import { Card, DEFAULT_CARD_LOCATION, DEFAULT_CARD_SIZE } from './components/card/card';
import { ContextMenu } from './components/context_menu/context_menu';
import { MainMenu } from './components/main_menu/main_menu';
import { ContextMenuOptions, ICard } from './interfaces.js';

function App() {
  const [contextOpen, setContextOpen] = useState(false);
  const [cursor, setCursor] = useState({x: 0, y: 0});
  const [cards, setCards] = useState<ICard[]>([]);

  function addCard() {
    const newCard: ICard = {
      left: DEFAULT_CARD_LOCATION.left,
      top: DEFAULT_CARD_LOCATION.top,
      width: DEFAULT_CARD_SIZE.width,
      height: DEFAULT_CARD_SIZE.height,
    };
    setCards(cards => [...cards, newCard]);
  }

  const options: ContextMenuOptions = [
    ['New card', addCard],
    ['Print', () => console.log('Hi')],
  ];

  function openContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    console.log('Open menu!');
    setCursor({x: event.clientX, y: event.clientY});
    setContextOpen(true);
  }

  function closeContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    console.log('Close menu!');
    setContextOpen(false);
  }

  return (
    <>
      <MainMenu/>
      {contextOpen ? (
        <ContextMenu options={options} open={true} left={cursor.x} top={cursor.y}/>
      ) : (
        ''
      )}
      <div
        className="board"
        onContextMenu={openContextMenu}
        onClick={closeContextMenu}
      >
        <h1 className="board-hint">Here's your board</h1>
        {
          cards.map((card: ICard) => (
            <Card left={card.left} top={card.top} width={card.width}
                  height={card.height}/>
          ))
        }
      </div>
    </>
  );
}

export default App;
