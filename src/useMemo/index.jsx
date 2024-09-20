import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(10);

  //   const multiplication = () => {
  //     console.log("Check render");
  //     return increment * 5;
  //   };

  const multiplication = useMemo(() => {
    console.log("Check render: useMemo!");
    return increment * 5;
  }, [increment]);

  return (
    <div>
      <h1>4. UseMemo</h1>
      <h2>
        {increment} || {multiplication}
      </h2>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <h2>{decrement}</h2>
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
    </div>
  );
};

export default UseMemo;
