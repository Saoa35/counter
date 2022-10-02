import React from 'react';
import { useState } from 'react';
import '../../index.scss'

function App() {

  const [count, setCount] = useState(null);

  const handleClickPlus = () => {
    setCount(count + 1);
  }

  const handleClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">

      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleClickPlus}>Plus +</button>
      <button onClick={handleClickMinus}>- Minus</button>

    </div>
  );
}

export default App;
