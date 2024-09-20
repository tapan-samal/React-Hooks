import React, { useEffect, useRef, useState } from "react";

const TrackAppRender = () => {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <>
      <h2>B. Track App Render:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h4>Render Count: {countRef.current}</h4>
      <p>
        Typing in the input field and see the application render count increase.
      </p>
    </>
  );
};

export default TrackAppRender;
