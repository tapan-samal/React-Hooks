import React, { useState } from "react";

const StateAsString = () => {
  const [language, setLanguage] = useState("JavaScript");

  const handleLanguage = () => {
    setLanguage("Python");
  };

  return (
    <>
      <h2>B. State as String:</h2>
      <h4>My favorite Language is {language}</h4>
      <button onClick={handleLanguage}>Update Language</button>
    </>
  );
};

export default StateAsString;
