import { useState } from "react";

export const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 3);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
