import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(null);



  return (
    <div className="App">

      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleClickPlus}>- Minus</button>
      <button onClick={handleClickMinus}>Plus +</button>

    </div>
  );
}

export default App;
