import React, { useCallback, useState } from "react";
import ChildComp from "./component/ChildComp";

const UseCallback = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(10);

  // const propsFunction = () => {
  //   //Some code
  // }

  const propsFunction = useCallback(() => {
    //Some code
  }, [decrement]);

  return (
    <>
      <h1>5. UseCallback</h1>
      <h2>{increment}</h2>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <ChildComp propsFunction={propsFunction} decrement={decrement} />
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
    </>
  );
};

export default UseCallback;
