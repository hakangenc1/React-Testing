import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setNumber(prevState => prevState - 1);
  };
  return (
    <div>
      <div data-testid="counter">{number}</div>
      <button data-testid="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
