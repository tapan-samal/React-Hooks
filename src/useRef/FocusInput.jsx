import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "blue";
    inputRef.current.placeholder = "Enter Data";
    inputRef.current.value = 12345;
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
