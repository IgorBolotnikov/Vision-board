import React from 'react';

import Menu from './Components/MainMenu';
import ContextMenu from './Components/ContextMenu'

import './index.css';

function App() {
  return (
    <>
      <ContextMenu />
      <Menu />
      <div className="board">
        <h1 className="board-hint">Here's your board</h1>
      </div>
    </>

  );
}

export default App;
