import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>A. Focus Input: </h2>
      <input type="text" ref={inputRef} /> &nbsp;
      <button onClick={handleFocusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
