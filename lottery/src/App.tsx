import React from 'react';
import './App.css';
import Ball from './Ball';

const App: React.FC = () => {
  return (
    <div className="App">
      <Ball num={17} />
    </div>
  );
}

export default App;
