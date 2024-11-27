import React, { useState } from "react";

const StateAsNumber = () => {
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];

  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h2>A. State as Number:</h2>
      <button onClick={handleIncrement} disabled={number === 20}>+</button>{" "}
      <h3>{number}</h3>
      <button onClick={handleDecrement} disabled={number === 0}>-</button>
    </>
  );
};

export default StateAsNumber;
