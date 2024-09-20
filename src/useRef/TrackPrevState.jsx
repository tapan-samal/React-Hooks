import React, { useEffect, useRef, useState } from "react";

const TrackPrevState = () => {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef();

  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h2>C. Track Previous State:</h2>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <h4>Current Value: {inputValue}</h4>
      <h4>Previous Value: {prevInputValue.current}</h4>
    </>
  );
};

export default TrackPrevState;
