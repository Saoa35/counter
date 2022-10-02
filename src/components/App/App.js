import React from 'react';
import { useState } from 'react';
import '../../index.css'

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
      <button onClick={handleClickPlus} className='plus'>Plus +</button>
      <button onClick={handleClickMinus} className='minus'>- Minus</button>

    </div>
  );
}

export default App;
