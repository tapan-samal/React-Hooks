import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state < 20 ? state + 1 : state;
    case "Decrement":
      return state > 0 ? state - 1 : state;
    case "Reset":
      return 0;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>7. UseReducer</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>{" "}
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>{" "}
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
};

export default UseReducer;
