import React from 'react';

import { MainMenu } from './components/main_menu/main_menu';
// import ContextMenu from './components/context_menu/context_menu';

import './index.css';

function App() {
  return (
    <>
      <MainMenu />
      <div className="board">
        <h1 className="board-hint">Here's your board</h1>
      </div>
    </>
  );
}

export default App;
