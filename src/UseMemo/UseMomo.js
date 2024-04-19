import React, { useMemo, useState } from "react";

const UseMomo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(20);

  //   const multiple = () => {
  //     console.log("Render when minus button also clicked!");
  //     return add + 5;
  //   };
  
  const optimisedFun = useMemo(() => {
    console.log("Render when minus button also clicked!");
    return add + 5;
  }, [add]);

  return (
    <div>
      <h2>UseMomo :</h2>
      {/* <h3>{multiple()}</h3> */}
      <h3>{optimisedFun}</h3>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <h3>{add}</h3>
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <h3>{minus}</h3>
    </div>
  );
};

export default UseMomo;
