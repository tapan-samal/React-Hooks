import React, { useEffect, useState } from "react";

const NoDependancy = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(number + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
  //Test here by appllying []

  return (
    <>
      <h2>A. No Dependancy:</h2>
      <h4>I have rendered {number} times!</h4>
    </>
  );
};

export default NoDependancy;
