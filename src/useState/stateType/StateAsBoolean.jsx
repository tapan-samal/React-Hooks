import React, { useState } from "react";

const StateAsBoolean = () => {
  const [isToggle, setToggle] = useState(false);

  const handleCheckbox = () => {
    setToggle(!isToggle);
  };

  return (
    <>
      <h2>C. State as Boolean:</h2>
      <h3>
        <input type="checkbox" onChange={handleCheckbox} />
        {isToggle ? "Active" : "Inactive"}
      </h3>
    </>
  );
};

export default StateAsBoolean;
