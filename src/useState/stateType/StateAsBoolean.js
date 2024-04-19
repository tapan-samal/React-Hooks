import React, { useState } from "react";

const StateAsBoolean = () => {
  const [isLoading, setLoading] = useState(false);

  const handleClickBtn = () => {
    // setLoading(!isLoading);
    setLoading((prevData) => !prevData); //Reccomended because asynchronous state updates or multiple state updates within a single event handler.
  };

  return (
    <>
      <h2>State as Boolean:</h2>
      {isLoading ? <h3>Data received fron API</h3> : <h3>Loading...</h3>}
      <button onClick={handleClickBtn}>Toggle Data</button>
    </>
  );
};

export default StateAsBoolean;
