import React from 'react';

import Menu from './Components/main_menu';

import './index.css';

function App() {
  return (
    <>
      <Menu />
      <div className="board">
        <h1 className="board-hint">Here's your board</h1>
      </div>
    </>

  );
}

export default App;
