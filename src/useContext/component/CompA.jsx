import React, { useContext } from "react";
import CompB from "./CompB";
import { Context2 } from "../index";

const CompA = () => {
  const { count, handleIncrement, handleDecrement } = useContext(Context2);
  return (
    <div>
      <h2>Component A</h2>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button> {" "}
      <button onClick={handleDecrement}>Decrement</button>
      <CompB />
    </div>
  );
};

export default CompA;
