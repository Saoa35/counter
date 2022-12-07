import React from "react";
import { useState } from "react";
import "../../index.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <div className="main">
        <div>
          <h2>Counter</h2>
          <h1>{count}</h1>
          <button onClick={handleClickPlus} className="plus">
            Plus +
          </button>
          <button onClick={handleClickMinus} className="minus">
            - Minus
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
