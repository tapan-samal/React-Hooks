import React, { useState } from "react";

const StateAsString = () => {
  const [color, setColor] = useState("White");

  const handleColor = () => {
    setColor("Black");
  };
  
  return (
    <>
      <h2>State as String:</h2>
      <h4>My favorite color is {color}</h4>
      <button onClick={handleColor}>Update Color</button>
    </>
  );
};

export default StateAsString;
